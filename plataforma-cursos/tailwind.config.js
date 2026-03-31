/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e3cb85",   // Ocre
        secondary: "#606f95", // Azul
        accent: "#b38b4d",    // Ocre Escuro
        neutral: "#fcfaf6",   // Off-white
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}