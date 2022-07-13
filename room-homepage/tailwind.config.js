/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)"
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"]
      }
    },
  },
  plugins: [],
}
