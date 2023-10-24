/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 480px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px'
      // => @media (min-width: 1024px) { ... }
    },
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
