const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#3C2D77',
        gray: {
          light: '#87a3b5',
          DEFAULT: '#062634',
          dark: '#031923',
        },
        blue: {
          light: '#00B7C4',
          DEFAULT: '#020046',
          dark: '#000000'
        }
      },
    },
    
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
