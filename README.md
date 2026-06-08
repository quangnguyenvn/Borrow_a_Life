<p align="center">
  <img src="apps/web/static/brand-mark.svg" width="92" alt="Borrow a Life logo" />
</p>

<h1 align="center">ordinary.help — Borrow a Life</h1>

<p align="center">
  <strong>Borrow a life. See your own differently.</strong>
</p>

<p align="center">
  A hackathon MVP about safe, public windows into other people's everyday lives.
</p>

---

## 🌀 The Idea

Borrow a Life turns the domain **ordinary.help** into a product.

The simple belief behind it:

> No life is ordinary from the inside.

Most people make big decisions from the outside. They imagine what it might feel like to move to another city, become a software engineer, work on a farm, cook in a restaurant, start a company, or begin again after losing direction.

Borrow a Life lets someone experience a short, bounded, public rhythm of another real life before making assumptions about it.

It is not a tour app.  
It is not a class marketplace.  
It is not about entering someone's private life.

It is a perspective marketplace.

---

## 🪟 What You Can Borrow

Users can explore short life windows such as:

- 🧑‍💻 A morning as a Berlin software engineer
- 🌱 A dawn with a vegetable farmer
- 🍳 A dinner prep window with a line cook
- 🧺 A morning with a street vendor
- 🚀 A work window with a startup founder
- 🌫️ A morning with someone starting over

Each experience is designed around a public rhythm: commute, work preparation, market routine, restaurant prep, decision pressure, recovery, or reflection.

The goal is not entertainment alone. The goal is to return with a deeper view of work, place, pressure, dignity, and possibility.

---

## 🌏 Philosophy

The project is inspired by the spirit of **"muôn kiếp nhân sinh"**: every life carries many layers, and every ordinary day may contain a whole world of causes, choices, memories, pressure, kindness, and meaning.

From the outside, another person's life can look simple.

From the inside, it has rhythm.

Borrow a Life is built around that feeling. It asks people to slow down, step into a respectful public window, and come back with more empathy for others and more clarity about themselves.

---

## 🛡️ Why Safety Matters

Because the product deals with real-world experiences, safety is not a secondary feature. It is part of the concept.

Every session should be:

- 👥 Public or semi-public
- ⏱️ Time bounded
- 🚪 Easy to exit
- 📍 Clear about location and itinerary
- 🤝 Respectful to both guest and host
- 🔒 Never based on private homes, overnight stays, isolation, romance, or emotional manipulation

The app includes an AI Safety Engine that analyzes risk and generates a Boundary Contract before a booking request can be sent.

---

## 💡 Why This Could Become Real

Borrow a Life could help people who are considering:

- Career changes
- Moving to a new city or country
- Restaurant, farm, startup, or service work
- A new lifestyle before committing to it
- Empathy training for teams, founders, and communities
- A more human way to explore possible futures

The business is practical because people already pay for tours, coaching, classes, shadowing, and experiences. Borrow a Life combines those behaviors into something more emotional, more useful, and more memorable.

The creative edge is that it makes **ordinary.help** feel literal:

ordinary lives can help us understand our own.

---

## ✨ Product Experience

The current MVP includes:

- 🏠 A polished home page with motion previews
- 🔎 Explore cards for different life windows
- 📄 Detail pages with host rhythm, tags, price, and intent
- 🧭 A borrow flow focused on user motivation
- 🛡️ AI safety analysis
- 📜 Boundary Contract generation
- 🎬 Demo videos for several jobs

The product line is:

> Spend 2-8 hours inside someone else's public rhythm and return with a deeper view of work, place, and possibility.

---

## 🧰 Tech, Briefly

This MVP is intentionally simple:

- SvelteKit web app
- TypeScript
- Tailwind CSS
- Rust Axum Safety Engine
- Static demo data and local video assets

There is no production auth, payment, or database yet. The focus is concept, product polish, safety logic, and storytelling.

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

## 🎥 Demo Flow

1. Open the home page.
2. Watch the Berlin software engineer motion preview.
3. Explore different life windows.
4. Open a listing detail page.
5. Start the borrow flow.
6. Run the AI Safety Engine.
7. Review the Boundary Contract.
8. Send a safe request.

The demo is designed to show that this is not only a nice interface, but a product with a real-world safety model.

---

## 🚀 Next Step

Borrow a Life is currently an MVP, but I plan to keep developing it into a real startup concept.

The next version would explore:

- Verified hosts
- Real booking flows
- Stronger AI safety checks
- Identity and trust layers
- City-by-city launch strategy
- Community guidelines
- Payments and refunds
- Host onboarding

---

## 👋 Founder

Built by **Quang Nguyen**.

- Email: [quangnguyen@octech.com.vn](mailto:quangnguyen@octech.com.vn)
- LinkedIn: [Quang Nguyen](https://www.linkedin.com/in/quang-nguyen-10422718b/)

I am exploring how to turn this MVP into a real startup: practical enough to launch, thoughtful enough to matter, and creative enough to make people look at ordinary lives differently.
