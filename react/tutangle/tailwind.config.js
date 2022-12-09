/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors:{
        'viking': {  DEFAULT: '#72BFD7',  '50': '#FFFFFF',  '100': '#F1F9FB',  '200': '#D1EAF2',  '300': '#B2DCE9',  '400': '#92CDE0',  '500': '#72BFD7',  '600': '#46ABCB',  '700': '#308CA9',  '800': '#24687D',  '900': '#174451',},

        'wild-sand': {  DEFAULT: '#F5F5F5',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#FFFFFF',  '300': '#FFFFFF',  '400': '#FFFFFF',  '500': '#F5F5F5',  '600': '#D9D9D9',  '700': '#BDBDBD',  '800': '#A1A1A1',  '900': '#858585'},

        'aquamarine-blue': {  DEFAULT: '#82D2DF',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#E3F5F8',  '300': '#C3E9F0',  '400': '#A2DEE7',  '500': '#82D2DF',  '600': '#55C2D4',  '700': '#31ACC0',  '800': '#268493',  '900': '#1A5C66'},
      },

    },
  },
  plugins: [],
}
