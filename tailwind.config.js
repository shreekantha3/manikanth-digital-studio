/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial photography palette — warm ivory ground, deep charcoal type,
        // champagne accent reserved for tiny moments of emphasis.
        ivory: {
          DEFAULT: '#F5F1EA',
          50: '#FAF8F4',
          100: '#F5F1EA',
          200: '#EAE3D6',
          300: '#D9CFB9',
        },
        beige: {
          DEFAULT: '#E8DFD0',
          200: '#EFE8DA',
          400: '#D9CDB5',
        },
        charcoal: {
          DEFAULT: '#1F1B17',
          50: '#5A534B',
          100: '#3D3733',
          200: '#2D2926',
          300: '#262220',
          400: '#1F1B17',
          500: '#15120F',
        },
        champagne: {
          DEFAULT: '#C8A86A',
          soft: '#D9BE85',
          deep: '#A98A4E',
        },
        sage: {
          DEFAULT: '#8B8678',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        editorial: '-0.015em',
      },
      maxWidth: {
        editorial: '88rem',
        prose: '65ch',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slow-zoom': 'slowZoom 14s ease-in-out infinite alternate',
        'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        reveal: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
