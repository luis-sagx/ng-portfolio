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
          400: '#559370', // nav-bg
          600: '#3d805a', // primary-color
          900: '#0d7766', // second-color

        },
        secondary: {
          500: '#40ad8a', // second-color dark mode
          600: '#0d9488',
        },
      },
    },
  },
  plugins: [],
}
