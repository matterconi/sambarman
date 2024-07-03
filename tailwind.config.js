/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f4a261',
        seaBlue: '#264653',
        turquoise: '#2a9d8f',
        terracotta: '#e76f51',
        sunset: '#fca311',
      },
      fontFamily: {
        cocktail: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'custom-lg': 'rgba(0, 0, 0, 0.24) 0px 30px 8px',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1rem))' }, // Adjust based on margin/padding
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(50% - 1rem))' }, // Adjust based on margin/padding
        },
      },
      animation: {
        scrollLeft: 'scrollLeft linear infinite',
        scrollRight: 'scrollRight linear infinite 5s',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          '-webkit-mask-image': 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
          'mask-image': 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
        },
        '.hover-stop-animation': {
          animation: 'none !important',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
