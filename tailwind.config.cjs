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
        accentcolor1: "#540375",
        accentcolor2: "#F9F9F9",
        accentcolor3: "#F5E8DA",
        accentcolor4: "#545C00ff",
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
