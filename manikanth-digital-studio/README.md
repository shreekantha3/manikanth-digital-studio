# Manikanth Digital Studio

Premium photography studio based in Sindagi, Karnataka. Capturing weddings, celebrations, portraits, and the moments that become memories.

## Project Overview

This is a modern, enterprise-grade single-page website built with React 18, TypeScript, Vite 5, and Tailwind CSS v4. The design follows curated design-system patterns from Apple, Linear, Mercury, and Duolingo (referenced via Refero Styles library).

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite 5.4
- **Styling:** Tailwind CSS v4 (CSS-first with `@theme` tokens)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (`gh-pages` branch)

## Design System

Enterprise-level design tokens are exported as:
- `design-tokens.json` — structured token file
- `src/styles/globals.css` — CSS variables mapped to Tailwind v4 `@theme`
- Components use `font-display` (Playfair Display) and `font-body` (Poppins)

Color palette: `ivory`, `charcoal`, `champagne` (gold), `deep-black`, `soft-white`

## Features

- Responsive single-page layout with smooth-scroll navigation
- Portfolio gallery with lightbox and category filtering
- Contact form with WhatsApp booking integration
- Newsletter signup (footer)
- Dark mode toggle (system-aware + manual)
- Accessibility: `prefers-reduced-motion`, focus rings, ARIA labels

## Development

```bash
npm install
npm run dev
npm run build
```

## Quality & Testing

Quality review process is documented in:
- `QA/review-phase-1.md` — Phase 1 verification
- `QA/review-phase-2.md` — Phase 2 design system verification
- `QA/review-phase-2-final.md` — Phase 2 final review
- `QA/test-plan-phase-2-features.md` — Feature-level test plans
- `scripts/check-images.py` — Build-time image verification

## Repository

- **Main code:** `manikanth-digital-studio/` (this folder)
- **Live site:** https://github.com/shreekantha3/manikanth-digital-studio (GitHub Pages via `gh-pages` branch)
- **Design reference:** Refero Styles (`styles.refero.design`)

---

Built by Shreekantha3 · Sindagi, Karnataka · MIT License
