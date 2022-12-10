/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:
      {
        'cod-gray': {
          DEFAULT: '#121212',
          '50': '#6E6E6E',
          '100': '#646464',
          '200': '#4F4F4F',
          '300': '#3B3B3B',
          '400': '#262626',
          '500': '#121212',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      },
       spacing:
       {
          544:'544px',
       },

       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        border: 'border 4s ease infinite',
        
          shine: "shine 1s",
        },
        keyframes: {
          shine: {
            "100%": { left: "125%" },
          },

          border: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
      },

      
    },
  },
  plugins: [],

  


}

