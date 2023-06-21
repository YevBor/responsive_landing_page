/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1920px",
    },
    extend: {
      colors: {
        atera_pink: '#FF176B',
        gold: '#D1AD78',
        texts_color: '#1A1A1A',
    },
          spacing: {
        '7rem': '7rem',
      },
    },
  },
  plugins: [],
}

