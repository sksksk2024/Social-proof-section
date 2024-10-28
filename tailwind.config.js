/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./css/**/*.{css,js}",
  ],
  theme: {
    extend: {
      colors: {
        'very_dark_magenta': '#502050',
        'soft_pink': '#ee68a4',
        'dark_grayish_magenta': '#937b92',
        'light_grayish_magenta': '#f7f2f7',
      },
      width: {
        'profile': '4rem',
        'stars_width': '100%',
      },
      height: {
        'stars_height': '4rem',
      },
      screens: {
        '2xs': '380px',
        'xs': '480px', // extra small screens
        'sm': '640px', // small screens
        'md': '768px', // medium screens
        'lg': '1024px', // large screens
        'xl': '1280px', // extra large screens
        '2xl': '1536px', // double extra large screens
      },
    },
  },
  plugins: [],
}

