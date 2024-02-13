/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: "'Lobster', cursive",
        sixty: "'Sixtyfour', sans-serif",
        gloria: "'Gloria Hallelujah', cursive",
      },
    },
  },
  plugins: [],
};
