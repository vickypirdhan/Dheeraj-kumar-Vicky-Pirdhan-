
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0b12',
        foreground: '#f5f7ff',
        primary: {
          DEFAULT: '#7c3aed',
        },
      }
    }
  },
  plugins: []
}
