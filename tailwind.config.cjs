/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#A1AA91",
        purple: "#540375",
        cream: "#F5E8DA",
        white: "#FFFFFF",
      },
      fontFamily: {
        cursive: ["Jomhuria", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        heading: ["Finger Paint", "cursive"],
      },
    },
  },
  plugins: [],
};
