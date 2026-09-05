# Photography assets

Drop real studio photographs into the folders below and update the data
files in `src/data/` to point at them.

| Folder                | Suggested content                                         |
| --------------------- | --------------------------------------------------------- |
| `hero/`               | Hero background — wide, cinematic, dark-toned (2400px+).  |
| `weddings/`           | Wedding gallery images.                                   |
| `pre-wedding/`        | Pre-wedding session images.                               |
| `portraits/`          | Portrait and family portraits.                            |
| `maternity/`          | Maternity session images.                                 |
| `newborn/`            | Newborn session images.                                   |
| `events/`             | Event and reception images.                               |
| `studio/`             | Studio setup, behind-the-scenes, commercial work.         |
| `og-image.jpg`        | 1200×630 social-share image used by Open Graph & Twitter. |

Once the images are in place, update the `image` fields in:

- `src/data/services.ts` (one image per service)
- `src/data/portfolio.ts` (one image per gallery item)
- `src/components/Hero.tsx` (the hero image constant)
- `src/components/Intro.tsx` (the editorial image)
- `src/components/FeaturedStory.tsx` (the parallax image)
- `src/components/FinalCTA.tsx` (the closing CTA image)

Use the format `/images/portfolio/wedding-01.jpg` for new images, then
optimise them as `.webp` or `.avif` for the smallest possible payload.
