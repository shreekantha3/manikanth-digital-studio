---
name: phase-2-features-test-plan
version: 1.0.0
description: Quality test plan before building Phase 2 features — dark mode, newsletter signup, WhatsApp booking.
---

# Phase 2 Features — Quality Test Plan

## Requirements (from strategic review / Refero design patterns)

### Feature A: Dark Mode
- System-aware (`prefers-color-scheme: dark`)
- Manual toggle available in Header
- Color inversion: ivory → deep-black, charcoal → ivory, champagne → bronze (muted for dark)
- All components must render without broken text on dark surfaces

### Feature B: Newsletter Signup
- Footer-integrated single-field email capture
- Submit triggers success message (no real backend needed for demo)
- Uses `lucide-react` `Mail` icon
- Focus ring matches design tokens

### Feature C: WhatsApp Booking
- Header primary CTA updated to open WhatsApp with pre-filled message
- Contact component links WhatsApp number to `https://wa.me/` URL
- `siteConfig.whatsapp` used consistently

## Test Cases (Pre-Build)
- [ ] Design tokens include `void` color for dark surfaces
- [ ] `globals.css` has `.dark` or `prefers-color-scheme` media query ready
- [ ] Component files reference correct icons (`Moon`/`Sun` for dark toggle, `Mail` for newsletter)
- [ ] WhatsApp URL format correct: `https://wa.me/<number>`

## Build Verification (After Implementation)
- [ ] Dark mode toggles without page reload (CSS variables switch)
- [ ] Newsletter input validates email format
- [ ] WhatsApp links open correctly on mobile/desktop
- [ ] No TypeScript errors in new component files
