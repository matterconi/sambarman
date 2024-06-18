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
        'custom-lg':'rgba(0, 0, 0, 0.24) 0px 30px 8px',
      },
    },
  },
  plugins: [],
}
