
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./templates/*.html", "./themes/**/*.html"],
  // purge: ['./pages/**/*.tsx'],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      circle: 'circle',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {},
    // colors2: {
    //   'red': colors.indigo[500],
    //   'blue': '#00f',
    // },
    linearGradientColors: theme => theme('colors'),
    // radialGradientColors: theme => theme('colors2'),
    // conicGradientColors: theme => theme('colors2'),
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
