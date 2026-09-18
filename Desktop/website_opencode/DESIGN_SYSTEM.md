# Design System — Segment → Stack Mapping
> Source: `Ultimate Design & UI Resources.txt`. Base for ALL sites: **Tailwind CSS + Vite + semantic HTML + Inter/Plus Jakarta Sans + Open Props tokens**. No heavy framework per site (Pages-friendly, <200KB first load target).

## 1. Shared foundation (all segments)
- **Primitives:** shadcn/ui aesthetic (copy-paste styles, not dependency) + Radix/Headless accessibility patterns (focus rings, aria, keyboard nav).
- **Motion (budgeted):** Framer Motion-style CSS + AutoAnimate for lists, Animate.css for entrances. Max 1 heavy animation per page. Respect `prefers-reduced-motion`.
- **Patterns library:** Mobbin/Refero patterns for nav/hero/CTA/footer; Front-End-Checklist for pre-ship.
- **Inspiration refs:** Godly/Awwwards for hero, Land-book/Cruip for landing structure, BentoGrids for galleries.

## 2. Per-segment themes
| Segment | Vibe (ref) | Palette | Sections | Wow-factor (pick ≤2) |
|---|---|---|---|---|
| **Food** (12 sites: Khanawali, Krishna Garden, Bikarner…) | Warm appetizing (Dribbble food) | Saffron `#E8641B` + cream + leaf green | Hero w/ thali img, Menu/Veg-Specials, Timings, Reviews, Order-on-Call/WhatsApp, Maps | Magic UI marquee (dishes), bento menu grid, Lottie steam/smoke |
| **Healthcare** (8: Chincholi, Sindagikar, Kulkarni…) | Trust clinical (Polaris/Fluent) | Teal `#0E7C7B` + white + slate | Treatments, Doctors, Hygiene/Safety, Appointments (tel:), Emergency strip, FAQ | Tremor-style stats (patients, rating), calm reveal animations, sticky call bar |
| **Retail** (20: Menlife, Shree Krishna, United 18…) | Premium storefront (NextUI/Mantine) | Indigo/charcoal + gold accent | Collections, Size/Price list, Lookbook, Store info, WhatsApp enquiry | Product bento, hover zoom, AutoAnimate filters |
| **Hospitality** (8: Shree Ram Lodge, Prashanth…) | Comfort stay (Dark Mode Design) | Deep navy + amber | Rooms, Amenities, Tariff, Gallery, Book-by-Phone, Nearby, Policies | Aceternity parallax hero, gallery lightbox |
| **Education** (6: Bheema, Loyola…) | Scholarly (Taxonomy/Geist) | Blue `#1D4ED8` + white | Programs, Faculty, Admissions, Calendar, Results, Contact | Timeline + stats counters |
| **Fitness** (3: Fm Sarkar, Olympia, Sun) | Bold energetic | Black + lime `#BFFF00` | Programs, Trainers, Pricing, Transformations, Trial CTA | Animated counters, marquee, dark mode |
| **Tech/Services** (Kojagir, Ganesh Infotech, Nimagagi…) | SaaS clean (Salient/Cruip) | Violet + slate | Services, Pricing, Work, Contact | Magic UI bento + glowing cards |

## 3. Mandatory components per site
Nav (mobile hamburger) → Hero (H1 with business name + city + CTA Call/Directions) → Trust strip (rating/maps) → Main offerings → Gallery/Menu → Reviews → Hours+Contact+Maps embed → FAQ → Footer + JSON-LD `LocalBusiness`. Floating Call/WhatsApp button on mobile.

## 4. Anti-rules
No lorem ipsum. No external image hotlinks (use local `assets/` + optimized). No 3+ font families. No autoplay video. Contrast AA minimum (learned 2026-09-10: saffron `#E8641B` fails text contrast — use `brand-700 #A63F0D` for text/buttons; load Google Fonts async `media="print" onload`). Every phone number `tel:+91...`, every address links to `google_maps_url` from CSV.

## 5. As-built additions (2026-09-15, all live)
- **New kits:** restaurant (🍛 `#A63F0D`), clothing (👕), grocery (🧺 `#2F7D32`), tech violet (`#6D28D9`), education blue (`#1E40AF`), fitness dark-lime (`#3F6212` on near-black `#0C0F0A`), services, market directory, transit depot (🚌), emergency ambulance (🚨 red banner).
- **Phone-aware CTAs:** mobiles get Call Now (`tel:`) + WhatsApp (`wa.me`, greeting text); landline-style numbers call-only; missing phone → Directions/Maps fallback + `data-missing="phone"` (never invent numbers).
- **Maps embed standard:** every Visit section embeds `https://www.google.com/maps?q=<listing-query>&output=embed` (lazy, no API key), query fused from the page's own Maps URL.
- **Per-site README:** live link, stack, owner update guide (phone/hours/photos/map), rebuild steps — committed in every repo.
- **Repo About boxes:** all 69 link their live Pages URL.

## 6. Inspiration & resource playbook (user-supplied, 2026-09-16)
Use BEFORE designing/upgrading any segment or kit. Don't invent styles — pull from these:
- **Full-site galleries (industry/style filters):** Awwwards, SiteInspire, Curated Design, Httpster, MaxiBestOf, Best Website Gallery, SeeSaw
- **Closest to our segments:** Websitevice (real-world business sites by industry: restaurant/retail/clinic), Dead Simple Sites (minimalism — default vibe for small-town local businesses)
- **Section-level:** Unsection (hero/footer/pricing specific), Refero (styles.refero.design, real app UI patterns), designsystems.one (design system references)
- **Process rules (from Interfere blog):** (1) one signature visual thread per brand reused across hero/cards/buttons; (2) animate only blur/opacity/translateY, staggered, subtle — never robotic; (3) build assets in code (SVG/CSS) not images — performance win; (4) restraint: one hero sequence + subtle scroll reveals max (aligns with §1 motion budget).
