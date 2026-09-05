# Manikanth Digital Studio — Website

A premium, image-first, static website for **Manikanth Digital Studio**, a
photography studio in Sindagi, Karnataka.

Built as a single-page React + TypeScript application that compiles to a
fully static build and deploys to **GitHub Pages** automatically on every
push to `main`.

> The look and feel target: a high-end photography studio — cinematic,
> editorial, image-first, modern Indian wedding photography, strong
> typography, considered motion. Not a generic local-business template.

---

## ✦ Features

- **Cinematic hero** with subtle parallax + slow zoom, animated headline,
  location badge, and dual CTAs.
- **Editorial service list** — eight service chapters in an alternating
  layout, each with a dedicated photograph and caption.
- **Masonry portfolio gallery** with category filter, hover lift, full
  lightbox (keyboard + touch swipe navigation).
- **Full-bleed featured story** section as a visual break.
- **Why choose us** and **process** sections with qualitative differentiators
  (no fabricated statistics).
- **Verified-only testimonials** — placeholder block shown until real,
  permissioned customer reviews are added.
- **Contact section** with Google Maps embed, studio hours, "Today"
  indicator, and Call / WhatsApp / Directions CTAs (numbers only show when
  configured).
- **Final cinematic CTA** and minimal premium footer.
- **LocalBusiness + PhotographyBusiness JSON-LD** structured data.
- **SEO**: semantic HTML, Open Graph, Twitter cards, canonical, robots,
  sitemap.
- **Accessibility**: keyboard navigation, focus states, semantic HTML,
  `prefers-reduced-motion` respected, accessible map iframe.
- **Performance**: code-split vendor/motion/icon chunks, lazy-loaded images,
  `fetchpriority="high"` on the hero LCP image, manual chunk splitting.
- **Mobile-first** with tested breakpoints from 320px to 1920px.

## ✦ Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 5](https://vitejs.dev/) — static build
- [Tailwind CSS 3](https://tailwindcss.com/) — design system
- [Framer Motion](https://www.framer.com/motion/) — choreographed motion
- [Lucide React](https://lucide.dev/) — minimal line icons
- Google Fonts — Cormorant Garamond (display) + Inter (body)

## ✦ Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/                    # Real studio photos go here
│       ├── hero/
│       ├── weddings/
│       ├── pre-wedding/
│       ├── portraits/
│       ├── maternity/
│       ├── newborn/
│       ├── events/
│       └── studio/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/                # One file per section
│   ├── data/                      # All business content
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   ├── testimonials.ts
│   │   └── site.ts                # Brand, contact, social, hours
│   ├── hooks/                     # Reusable hooks
│   └── styles/globals.css         # Design system + utilities
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## ✦ Local development

Requires Node 18+ and npm 9+.

```bash
# Install dependencies
npm install

# Start the dev server (defaults to http://localhost:5173)
npm run dev

# Type-check the project
npm run type-check

# Build a production bundle into ./dist
npm run build

# Preview the production build locally
npm run preview
```

## ✦ GitHub Pages deployment

The repository is configured to deploy automatically to **GitHub Pages**
on every push to the `main` branch via the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### One-time setup

1. Create a new repository on GitHub (suggested name:
   `manikanth-digital-studio`).
2. Push this project to the repository.
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **GitHub Actions**.
5. (Optional) If you used a different repository name, add a variable
   `VITE_REPO_NAME` under **Settings → Secrets and variables → Actions →
   Variables** and set its value to your repository name. The Vite
   `base` path is computed from this.
6. Push to `main` — the workflow builds the site and publishes it to
   `https://<your-username>.github.io/<repo-name>/`.

### Custom domain

To use a custom domain, add a `CNAME` file under `public/` containing your
domain (e.g. `manikanthdigitalstudio.com`) and configure DNS with your
registrar. The Pages environment is already enabled in the workflow.

## ✦ Updating the site

All business content is centralised in `src/data/` and a few obvious
component constants. You should rarely need to touch component code to
update the site.

### 1. Brand & contact — `src/data/site.ts`

- `brand.name`, `brand.tagline` — studio name and tagline.
- `location.*` — address, landmark, Google Maps URL, and embed URL.
- `contact.phoneDisplay`, `contact.phoneTel` — phone shown on the site
  (leave empty until verified).
- `contact.whatsappNumber` — WhatsApp number in international format
  (e.g. `919999999999`). Until set, the site falls back to the Google
  Maps link for WhatsApp CTAs.
- `social.instagram`, `social.facebook`, `social.youtube` — only set
  with the studio's actual handles.
- `businessHours` — weekly opening hours. `Sunday` may use
  `"By appointment"` to indicate irregular hours.

### 2. Services — `src/data/services.ts`

Each entry controls a service row in the *Photography for every chapter*
section. Update `title`, `description`, `caption`, and `image`.

### 3. Portfolio — `src/data/portfolio.ts`

- `categories` — labels for the filter tabs.
- `portfolio` — gallery items. Each item has an `id`, `category`,
  `title`, `caption`, `image`, `imageAlt`, `span` (`tall` / `wide` /
  `square` for the masonry layout) and `aspect` ratio.

### 4. Testimonials — `src/data/testimonials.ts`

The site **does not** ship with fabricated customer quotes. When you
have a real, verified review, add an entry to the `testimonials` array.
The list is rendered automatically; if it is empty, a calm placeholder
is shown instead.

### 5. Hero / Featured Story / Final CTA images

The hero, intro, featured story, and final CTA currently use openly
licensed placeholder photography. To replace them with real images:

1. Drop the real image into `public/images/<folder>/`.
2. Update the `HERO_IMAGE` constant in
   [`src/components/Hero.tsx`](src/components/Hero.tsx), the
   `INTRO_IMAGE` constant in
   [`src/components/Intro.tsx`](src/components/Intro.tsx),
   `FEATURED_IMAGE` in
   [`src/components/FeaturedStory.tsx`](src/components/FeaturedStory.tsx),
   and `BG` in [`src/components/FinalCTA.tsx`](src/components/FinalCTA.tsx).

### 6. Open Graph image

Replace `public/og-image.jpg` with a real 1200×630 social-share image.

## ✦ What to collect from the studio before going live

1. **Real photographs** for hero, services, intro, featured story,
   portfolio, and final CTA — at least 20 wedding and 10 portrait
   images. Resize to ≤2400px on the long edge and export as `.webp`.
2. **Verified phone number** and **WhatsApp number** (international
   format with country code, digits only).
3. **Verified email address** (optional).
4. **Real social media URLs** for Instagram, Facebook, and/or YouTube.
5. **Confirmed business hours** (the defaults are a placeholder).
6. **2–4 verified customer testimonials** with permission to publish
   the customer's first name and the event type.
7. **A 1200×630 social-share image** (og-image.jpg).
8. **Google Business Profile** attributes — if the studio has
   specific service categories, photos, or geo-coordinates, update
   the JSON-LD block in `index.html` and the `coordinates` field in
   `src/data/site.ts`.

## ✦ Accessibility & performance notes

- All images have alt text and `loading="lazy"` (except the hero LCP).
- All interactive elements are reachable via keyboard, with visible
  focus rings.
- Animation respects `prefers-reduced-motion: reduce` (CSS in
  `src/styles/globals.css`).
- Heavy dependencies are code-split:
  - `vendor` (React, React-DOM)
  - `motion` (Framer Motion)
  - `icons` (Lucide)
- The Google Maps iframe is loaded with `loading="lazy"`.

## ✦ License

Code: MIT. Placeholder photographs used during development are from
[Unsplash](https://unsplash.com/license) and are free for commercial use
under the Unsplash License — replace with the studio's real work before
public launch.
