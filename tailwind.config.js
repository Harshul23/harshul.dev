/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",      // for index.html, about.html
    "./src/**/*.{js,css}",  // if you ever add JS or partials here
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
