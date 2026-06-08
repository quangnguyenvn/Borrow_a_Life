use axum::{routing::{get, post}, Json, Router};
use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use tower_http::cors::{Any, CorsLayer};

#[derive(Debug, Serialize)]
struct HealthResponse {
    status: &'static str,
    service: &'static str,
}

#[derive(Debug, Deserialize, Clone)]
struct ItineraryItem {
    time: String,
    title: String,
    location_type: String,
}

#[derive(Debug, Deserialize)]
struct SafetyAnalyzeRequest {
    start_time: String,
    end_time: String,
    duration_hours: f32,
    host_verified: bool,
    session_mode: String,
    location_type: String,
    private_vehicle_only: bool,
    public_exit_minutes: u32,
    itinerary: Vec<ItineraryItem>,
}

#[derive(Debug, Serialize)]
struct SafetyAnalyzeResponse {
    allowed: bool,
    score: u8,
    level: String,
    reasons: Vec<String>,
    warnings: Vec<String>,
    violations: Vec<String>,
}

#[derive(Debug, Serialize)]
struct BoundaryContractResponse {
    title: &'static str,
    allowed: Vec<&'static str>,
    not_allowed: Vec<&'static str>,
    required: Vec<&'static str>,
}

#[derive(Debug, Deserialize)]
struct ItineraryRiskRequest {
    itinerary: Vec<ItineraryItem>,
}

#[derive(Debug, Serialize)]
struct ItineraryRiskResponse {
    items: Vec<ItineraryRiskItem>,
}

#[derive(Debug, Serialize)]
struct ItineraryRiskItem {
    time: String,
    title: String,
    risk: String,
    message: String,
}

#[tokio::main]
async fn main() {
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/health", get(health))
        .route("/safety/analyze", post(analyze_safety))
        .route("/safety/boundary-contract", post(boundary_contract))
        .route("/safety/itinerary-risk", post(itinerary_risk))
        .layer(cors);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8081")
        .await
        .expect("failed to bind to 0.0.0.0:8081");

    axum::serve(listener, app)
        .await
        .expect("safety engine server failed");
}

async fn health() -> Json<HealthResponse> {
    Json(HealthResponse {
        status: "ok",
        service: "borrow-a-life-safety-engine",
    })
}

async fn analyze_safety(Json(payload): Json<SafetyAnalyzeRequest>) -> Json<SafetyAnalyzeResponse> {
    Json(analyze(payload))
}

async fn boundary_contract(Json(_payload): Json<SafetyAnalyzeRequest>) -> Json<BoundaryContractResponse> {
    Json(BoundaryContractResponse {
        title: "Boundary Contract",
        allowed: vec![
            "Ask career and lifestyle questions",
            "Observe public routines",
            "Join public meals if both sides agree",
            "Take personal notes",
        ],
        not_allowed: vec![
            "Enter private homes or bedrooms",
            "Record audio or video without consent",
            "Ask for confidential company information",
            "Change locations without in-app approval",
            "Use the session for romantic, sexual, or manipulative purposes",
        ],
        required: vec![
            "Stay within the approved itinerary",
            "Keep the session in public or semi-public locations",
            "Complete in-session safety check-ins",
            "End the session immediately if either side feels unsafe",
        ],
    })
}

async fn itinerary_risk(Json(payload): Json<ItineraryRiskRequest>) -> Json<ItineraryRiskResponse> {
    let blocked = blocked_locations();
    let items = payload
        .itinerary
        .into_iter()
        .map(|item| {
            if blocked.contains(item.location_type.as_str()) {
                ItineraryRiskItem {
                    time: item.time,
                    title: item.title,
                    risk: "high".to_string(),
                    message: location_message(&item.location_type),
                }
            } else if item.location_type == "semi_public" {
                ItineraryRiskItem {
                    time: item.time,
                    title: item.title,
                    risk: "medium".to_string(),
                    message: "Semi-public location; keep exit points visible".to_string(),
                }
            } else {
                ItineraryRiskItem {
                    time: item.time,
                    title: item.title,
                    risk: "low".to_string(),
                    message: "Public location".to_string(),
                }
            }
        })
        .collect();

    Json(ItineraryRiskResponse { items })
}

fn analyze(payload: SafetyAnalyzeRequest) -> SafetyAnalyzeResponse {
    let mut reasons = Vec::new();
    let mut warnings = Vec::new();
    let mut violations = Vec::new();
    let mut score: i32 = 100;

    let start_minutes = parse_time(&payload.start_time);
    let end_minutes = parse_time(&payload.end_time);

    match (start_minutes, end_minutes) {
        (Some(start), Some(end)) => {
            if start < 6 * 60 {
                violations.push("Sessions cannot start before 06:00".to_string());
                score -= 14;
            }

            if end > 22 * 60 {
                violations.push("Sessions cannot end after 22:00".to_string());
                score -= 14;
            }

            if !payload.host_verified && start < 8 * 60 {
                violations.push("Unverified hosts cannot start before 08:00".to_string());
                score -= 12;
            }

            if !payload.host_verified && end > 20 * 60 {
                violations.push("Unverified hosts cannot end after 20:00".to_string());
                score -= 12;
            }

            if violations.is_empty() {
                reasons.push("Session is within allowed time window".to_string());
            }
        }
        _ => {
            violations.push("Start time and end time must use HH:MM format".to_string());
            score -= 18;
        }
    }

    if payload.duration_hours > 8.0 {
        violations.push("Duration cannot exceed 8 hours".to_string());
        score -= 16;
    } else {
        reasons.push("Duration is under 8 hours".to_string());
    }

    let blocked = blocked_locations();
    if blocked.contains(payload.location_type.as_str()) {
        violations.push(location_message(&payload.location_type));
        score -= 16;
    }

    let blocked_itinerary_items: Vec<&ItineraryItem> = payload
        .itinerary
        .iter()
        .filter(|item| blocked.contains(item.location_type.as_str()))
        .collect();

    if blocked_itinerary_items.is_empty() && !blocked.contains(payload.location_type.as_str()) {
        reasons.push("All locations are public or semi-public".to_string());
    } else {
        for item in blocked_itinerary_items {
            violations.push(format!(
                "Itinerary item '{}' uses disallowed location type '{}'",
                item.title, item.location_type
            ));
            score -= 10;
        }
    }

    if payload.private_vehicle_only {
        violations.push("Private car-only experiences are not allowed".to_string());
        score -= 16;
    }

    if payload.public_exit_minutes > 10 {
        warnings.push("Public exit point is more than 10 minutes away".to_string());
        score -= 8;
    } else {
        reasons.push("Public exit point is nearby".to_string());
    }

    if payload.session_mode == "participate_lite" && !payload.host_verified {
        warnings.push("Participate-lite sessions require extra caution with unverified hosts".to_string());
        score -= 8;
    }

    if payload.host_verified {
        reasons.push("Host is verified".to_string());
    }

    let allowed = violations.is_empty();
    if !allowed {
        score = score.min(60);
    }

    let normalized_score = score.clamp(0, 100) as u8;
    let level = risk_level(normalized_score);

    SafetyAnalyzeResponse {
        allowed,
        score: normalized_score,
        level,
        reasons,
        warnings,
        violations,
    }
}

fn parse_time(value: &str) -> Option<u32> {
    let (hour, minute) = value.split_once(':')?;
    let hour: u32 = hour.parse().ok()?;
    let minute: u32 = minute.parse().ok()?;

    if hour > 23 || minute > 59 {
        return None;
    }

    Some(hour * 60 + minute)
}

fn risk_level(score: u8) -> String {
    match score {
        85..=100 => "low".to_string(),
        70..=84 => "medium".to_string(),
        _ => "high".to_string(),
    }
}

fn blocked_locations() -> HashSet<&'static str> {
    [
        "private_home",
        "hotel",
        "bedroom",
        "isolated",
        "remote_nature",
        "abandoned_place",
        "nightlife",
        "confidential_workplace",
    ]
    .into_iter()
    .collect()
}

fn location_message(location_type: &str) -> String {
    match location_type {
        "private_home" => "Private homes are not allowed in V1".to_string(),
        "hotel" => "Hotels are not allowed in V1".to_string(),
        "bedroom" => "Bedrooms are not allowed in V1".to_string(),
        "isolated" => "Isolated places are not allowed in V1".to_string(),
        "remote_nature" => "Remote nature sessions are not allowed in V1".to_string(),
        "abandoned_place" => "Abandoned places are not allowed in V1".to_string(),
        "nightlife" => "Nightlife sessions are not allowed in V1".to_string(),
        "confidential_workplace" => "Confidential workplaces are not allowed in V1".to_string(),
        _ => "Location type is not allowed in V1".to_string(),
    }
}
