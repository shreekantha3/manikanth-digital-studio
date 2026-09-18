#!/usr/bin/env python3
"""Build-time image checker for Manikanth Digital Studio."""
import os
import sys

PORTFOLIO_IMAGES = [
    "public/images/portfolio/weddings/wedding-1.jpg",
    "public/images/portfolio/weddings/wedding-2.jpg",
    "public/images/portfolio/weddings/wedding-3.jpg",
    "public/images/portfolio/pre-wedding/pre-1.jpg",
    "public/images/portfolio/pre-wedding/pre-2.jpg",
    "public/images/portfolio/portraits/portrait-1.jpg",
    "public/images/portfolio/portraits/portrait-2.jpg",
    "public/images/portfolio/maternity/maternity-1.jpg",
    "public/images/portfolio/newborn/newborn-1.jpg",
    "public/images/portfolio/events/event-1.jpg",
    "public/images/portfolio/studio/studio-1.jpg",
    "public/images/hero/hero-main.jpg",
]

def main():
    missing = []
    for path in PORTFOLIO_IMAGES:
        full_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), path)
        if not os.path.exists(full_path):
            missing.append(path)
    if missing:
        print("MISSING PORTFOLIO IMAGES (add real studio photos):")
        for p in missing:
            print(f"   - {p}")
        print(f"\nTotal missing: {len(missing)} / {len(PORTFOLIO_IMAGES)}")
        return 1
    else:
        print("All portfolio images present.")
        return 0

if __name__ == '__main__':
    sys.exit(main())
