/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D2691E',
        'primary-dark': '#8B4513',
        secondary: '#6C757D',
        text: '#3E3E3E',
        'text-light': '#777',
        background: '#FAF3E0',
        highlight: '#F9F1E7',
        'gray-light': '#F8F8F8'
      }
    },
  },
  plugins: [],
}
