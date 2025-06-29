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
    },
  },
  plugins: [],
}
