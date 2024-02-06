/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".{html,js,css}"],
  theme: {
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
      fontFamily: {
        'rubik': ['"Rubik"', 'sans-serif'],
      },
  },
  plugins: [],
};