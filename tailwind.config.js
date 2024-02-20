/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: "'Lobster', cursive",
        sixty: "'Sixtyfour', sans-serif",
        gloria: "'Gloria Hallelujah', cursive",
        pizza: "'Philosopher', sans-serif",
      },
      colors: {
        pizzaHut: "#ED1C24",
      },
    },
  },
  plugins: [],
};
