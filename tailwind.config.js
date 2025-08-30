
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: '#0b0b12',
        foreground: '#f5f7ff',
        primary: {
          DEFAULT: '#7c3aed', // purple
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: '#00f5d4',
        card: '#111119',
        card2: '#141422',
        muted: '#9aa3b2'
      },
      boxShadow: {
        glow: '0 0 25px rgba(124, 58, 237, 0.45)',
        glass: '0 10px 30px rgba(0,0,0,.35)',
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
