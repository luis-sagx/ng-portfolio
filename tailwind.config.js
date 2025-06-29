/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['"Righteous"', 'cursive'],
        body: ['"Merriweather Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          400: '#67977c', // nav-bg 
          900: '#0d7766', // second-color
        },
        secondary: {
          500: '#40ad8a', // second-color dark mode
        },
      },
    },
  },
  plugins: [],
}
