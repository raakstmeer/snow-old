/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
    theme: {
      colors : {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'ice' : '#dee7ed',
        'primary' : '#333540',
        'tprimary' : '#4d004d',
        'primary-dark' : '#1F2235',
      },
      screens: {
        '2xl': {'max': '1870px'},

        'xl': {'max': '1440px'},

        'lg': {'max': '1024px'},

        'md': {'max': '768px'},

        'sm': {'max': '425px'},

        'xs': {'max': '320px'},
      },
      rotate : {
        '360' : '360deg',
        '180' : '180deg'
      },
    },
    extend: {},
    
  plugins: [],
}
