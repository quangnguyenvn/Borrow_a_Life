<p align="center">
  <img src="apps/web/static/brand-mark.svg" width="92" alt="Borrow a Life logo" />
</p>

<h1 align="center">ordinary.help - Borrow a Life</h1>

<p align="center">
  <strong>Borrow a life. See your own differently.</strong>
</p>

<p align="center">
  A hackathon MVP for safe, public windows into ordinary lives that help people see their own differently.
</p>

---

## 🪟 Short Overview

Borrow a Life is a perspective marketplace for short, safe, public "Life Windows" into another person's real life.

It is not a tour app, not a class marketplace, not a mentor platform, and not a private-life marketplace. It is a way to spend 2-8 hours inside someone else's public rhythm and return with a deeper view of work, place, and possibility.

The core belief is simple:

> No life is ordinary from the inside.

Airbnb helps people find places to stay. Borrow a Life helps people find lives to learn from.

---

## 🌀 The Domain Idea

The domain **ordinary.help** became the product thesis.

**ordinary is the surface. help is the transformation.**

**ordinary** is a programmer's commute, a farmer's morning, a cook's prep shift, a vendor's market route, a founder's pressure, or someone quietly starting over.

**help** is what happens when those ordinary lives help someone test an assumption, make a better decision, or return to their own life with more empathy and perspective.

Borrow a Life makes the domain literal:

> Ordinary lives can help us understand our own.

---

## ✨ What You Can Borrow

The MVP includes several Life Windows:

- 🧑‍💻 A morning as a Berlin software engineer
- 🌱 A dawn with a vegetable farmer
- 🍳 A dinner prep window with a line cook
- 🧺 A morning with a street vendor
- 🚀 A work window with a startup founder
- 🌫️ A morning with someone starting over

Each Life Window is designed around a real public rhythm: commute, work preparation, market routine, restaurant prep, decision pressure, recovery, or reflection.

---

## 🌏 Product Philosophy

Borrow a Life is built around attention, empathy, and practical curiosity.

Many people make major life decisions from the outside. They imagine what a career, city, lifestyle, or second path might feel like, but their picture is often shaped by content, fantasy, or assumptions.

Borrow a Life gives them a safer and more human alternative:

> A safe public window into someone else's rhythm.

The point is not to romanticize another life. The point is to feel its texture honestly: the pace, tradeoffs, pride, fatigue, constraints, dignity, and meaning.

---

## 🛡️ Why Safety Matters

Because this project deals with real-world experiences, safety is part of the concept, not an extra feature.

Every Life Window should be:

- 👥 Public or semi-public
- ⏱️ Time-bounded
- 🚪 Easy to exit
- 📍 Clear about location and itinerary
- 🤝 Respectful to both guest and host
- 🔒 Never based on private homes, overnight stays, isolation, romance, or emotional manipulation

The MVP includes a **Rust-powered Safety Engine** and an **AI-assisted safety and boundary flow**. Before a request can be sent, the flow reviews the session shape and generates a Boundary Contract that explains what is allowed, what is not allowed, and what both sides must respect.

---

## 🧭 Product Experience

The MVP includes:

- 🏠 A polished home page with motion previews
- 🔎 Explore cards for different Life Windows
- 📄 Detail pages with host rhythm, tags, price, and intent
- 🧭 A borrow flow focused on user motivation
- 🛡️ Safety analysis
- 📜 Boundary Contract generation
- 🎬 Demo videos for several jobs and life windows

The product line is:

> Spend 2-8 hours inside someone else's public rhythm and return with a deeper view of work, place, and possibility.

---

## 🎥 Demo Video

The demo video is part of the storytelling experience. It uses Veo-generated character videos to represent different Life Windows and make the concept feel human, cinematic, and concrete.

Watch the product demo:

```txt
https://youtu.be/xFTPspzJJv0
```

The demo walks through the core experience: home, exploration, listing details, the borrow flow, safety analysis, and the Boundary Contract.

---

## 🧰 Tech Stack

This is a hackathon MVP, intentionally scoped around concept, product polish, safety logic, and storytelling.

- ⚡ SvelteKit
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 🦀 Rust Axum Safety Engine
- 🗂️ Static demo data
- 🎞️ Local video assets

There is no production authentication, payment system, or database yet.

---

## ▶️ Run Locally

Web app:

```bash
cd apps/web
npm install
npm run dev
```

Open:

```txt
http://localhost:5173
```

Safety Engine:

```bash
cd services/safety-engine
cargo run
```

Health check:

```bash
curl http://localhost:8081/health
```

Optional web environment variable:

```txt
PUBLIC_SAFETY_ENGINE_URL=http://localhost:8081
```

---

## 🧪 Demo Flow

1. Open the home page.
2. Watch the Berlin software engineer motion preview.
3. Explore different Life Windows.
4. Open a listing detail page.
5. Start the borrow flow.
6. Run the Safety Engine.
7. Review the Boundary Contract.
8. Send a safe request.

---

## 💡 Why This Could Become Real

Borrow a Life is practical because people already pay for tours, coaching, classes, shadowing, and experiences. This project combines those behaviors into something more emotional, more useful, and more memorable.

It could help people who are considering:

- 🧑‍💼 Career changes
- 🏙️ Moving to a new city or country
- 🍽️ Restaurant, farm, startup, or service work
- 🧭 A new lifestyle before committing to it
- 🤝 Empathy training for teams, founders, and communities
- 🌱 A more human way to explore possible futures

The creative edge is that the product makes **ordinary.help** feel real: ordinary days become safe, public windows that help people see their own lives differently.

---

## 🚀 What's Next

Borrow a Life is currently an MVP, but I plan to keep developing it into a real startup concept.

Next steps include:

- ✅ Verified hosts
- 📬 Real booking requests
- 🛡️ Stronger safety checks
- 🪪 Identity and trust layers
- 💳 Payments and refunds
- 🧑‍🏫 Host onboarding
- 🌍 City-by-city launch strategy

The long-term goal is to build something practical enough to launch, thoughtful enough to matter, and creative enough to make people see ordinary lives differently.

---

## 👋 Founder / Builder

Built by Quang Nguyen.

I'm building Borrow a Life as both a hackathon MVP and an early startup exploration: practical enough to test, thoughtful enough to matter, and creative enough to make people see ordinary lives differently.

Email: [quangnguyen@octech.com.vn](mailto:quangnguyen@octech.com.vn)  
LinkedIn: [Quang Nguyen](https://www.linkedin.com/in/quang-nguyen-10422718b/)
