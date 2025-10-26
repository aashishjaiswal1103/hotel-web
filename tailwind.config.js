/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ivory-sand': '#F7F3E9',
        'palace-beige': '#E6D7C3',
        'royal-maroon': '#7B2D26',
        'antique-gold': '#C9A45C',
        'peacock-teal': '#1E4D4C',
        'charcoal-ink': '#3B3B3B',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};