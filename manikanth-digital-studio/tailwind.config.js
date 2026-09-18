/**
 * Tailwind v4 Config — Manikanth Digital Studio
 * Note: v4 uses CSS-first configuration. This file is kept
 * for Vite plugin compatibility and future overrides.
 */

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        '.text-balance': {
          textWrap: 'balance',
        },
      });
    }),
  ],
};
