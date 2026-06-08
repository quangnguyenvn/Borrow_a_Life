export type SessionMode = 'observe' | 'conversation' | 'participate_lite';

export type LocationType =
  | 'public'
  | 'semi_public'
  | 'private_home'
  | 'hotel'
  | 'bedroom'
  | 'isolated'
  | 'remote_nature'
  | 'abandoned_place'
  | 'nightlife'
  | 'confidential_workplace';

export type ItineraryItem = {
  time: string;
  title: string;
  location_type: LocationType | 'public';
  note?: string;
};

export type LifeListing = {
  slug: string;
  title: string;
  host: string;
  hostTitle: string;
  location: string;
  duration: string;
  durationHours: number;
  price: string;
  safetyScore: number;
  tags: string[];
  considering: string[];
  category: 'Career Futures' | 'Place Rhythms' | 'Second Paths';
  visualTone: string;
  imageUrl: string;
  imageAlt: string;
  videoUrl?: string;
  why: string;
  hostBio: string;
  whoFor: string[];
  experience: string[];
  notDo: string[];
  itinerary: ItineraryItem[];
};

export type SafetyAnalyzeRequest = {
  start_time: string;
  end_time: string;
  duration_hours: number;
  host_verified: boolean;
  session_mode: SessionMode;
  location_type: LocationType;
  private_vehicle_only: boolean;
  public_exit_minutes: number;
  itinerary: ItineraryItem[];
};

export type SafetyAnalyzeResponse = {
  allowed: boolean;
  score: number;
  level: 'low' | 'medium' | 'high';
  reasons: string[];
  warnings: string[];
  violations: string[];
};

export type BoundaryContractResponse = {
  title: string;
  allowed: string[];
  not_allowed: string[];
  required: string[];
};
