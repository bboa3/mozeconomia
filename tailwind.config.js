const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      red: colors.rose,
      indigo: colors.indigo,
      gray: {
        light: '#87a3b5',
        DEFAULT: '#062634',
        dark: '#031923',
      },
      blue: {
        light: '#6493d8',
        DEFAULT: 'linear-gradient(160deg, rgba(13,29,53,0), rgba(13,29,53,1)), #1D3C6B',
        dark: '#1D3C6B'
      }
    },
    extend: {},
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
