const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        footer: {DEFAULT: '#20232e'},
        business: {DEFAULT: '#007bff'},
      },
      width: global.Object.assign({
        'post': '48%',
      },),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


