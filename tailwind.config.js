/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    minWidth: {
      '3/4': '75%'
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },

      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    }
  },
  plugins: []
};
