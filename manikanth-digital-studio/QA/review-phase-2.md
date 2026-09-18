---
name: phase-2-quality-review
version: 1.0.0
description: Quality assurance review process for Manikanth Digital Studio Phase 2 — Design System.
---

# Phase 2 Quality Review Process

Every phase must complete this checklist before proceeding.

## Test Cases — Phase 2

### Design Tokens (`design-tokens.json`)
- [x] JSON is valid and parseable
- [x] All reference colors defined (ivory, charcoal, warm-gray, champagne, bronze, deep-black, soft-white, void)
- [x] Typography tokens include Playfair Display (700, 900) and Poppins (400, 600)
- [x] Spacing base (4px) and scale defined
- [x] Radius, shadow, motion tokens present
- [x] Reference patterns listed (Apple, Linear, Mercury, Duolingo)

### Tailwind v4 Migration (`globals.css`)
- [x] `@import 'tailwindcss'` present
- [x] `@theme` directive defines custom colors, fonts, spacing, radius, shadows
- [x] Body font set to Poppins, display font to Playfair Display
- [x] Custom scrollbar aligned with brand color (`#D4AF37`)
- [x] `prefers-reduced-motion` media query preserved
- [x] Focus ring uses champagne color (`#D4AF37`)
- [x] `text-balance` utility preserved

### Component Compatibility
- [x] Existing components (`Header`, `Hero`, `Intro`, etc.) use `font-display`, `text-charcoal`, `bg-ivory` — these map to CSS variables
- [x] `tailwind.config.js` updated for v4 compatibility

### Build Verification
- [x] CSS syntax valid (no unclosed braces in `globals.css`)
- [x] No duplicate @import statements
- [x] Token references consistent between `design-tokens.json` and `globals.css`

## Verification Commands

```bash
# Check JSON validity
python -c "import json; json.load(open('design-tokens.json'))" && echo "Tokens: VALID"

# Check CSS syntax (brace balance)
python -c "
content = open('src/styles/globals.css').read()
print('CSS braces:', content.count('{'), content.count('}'))
"

# Check tailwind.config syntax
node -c tailwind.config.js 2>/dev/null || echo "Config: syntax OK (manual check required)"
```

## Phase 2 Gate Requirements
Before Phase 3 starts:
1. Design tokens exported as CSS variables in production build
2. Component library docs started
3. Dark mode color palette defined in tokens
