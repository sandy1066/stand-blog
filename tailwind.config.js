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
        'w-35': '35%',
        'w-65': '65%'
      },),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


