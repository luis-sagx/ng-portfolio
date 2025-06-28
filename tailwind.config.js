/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0d7766',
        'primary-dark': '#40ad8a',
        card: '#e2e0d9',
        'card-dark': '#262626',
        navbar: '#67977c',
        'footer-dark': '#1F1F1F',
      }
    }
  },
  content: ["./src/**/*.{html,ts}"],
  plugins: []
}

