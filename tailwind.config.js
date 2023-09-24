/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     extend: { 
      colors: {
      "color-primary": "#06053C",
      "color-secondary": "#B290FF",
      "color-therid":"#010101",
      "color-forth": "#A427DF",
      "color-tb":"#1D1B50",
      "color-white": "#fff",
    }
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '20px',
      md: "50px"
    }},
  },
  plugins: [],
}

