/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          400: '#67977c', // nav-bg 
          900: '#0d7766', // second-color
        },
        'secondary': {
          500: '#40ad8a', // second-color dark mode
        }
      },
    },
  },
  plugins: [],
}