/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor :{
      red: "#DC2E23",
      yellow: "#FBE639",
      dark: "#151F27",
      light: "#2E3A44",
      blackk: "#090302",
      white: "#FFFFFF",
    },
    textColor : {
      red: "#DC2E23",
      yellow: "#FBE639",
      dark: "#151F27",
      light: "#2E3A44",
      blackk: "#090302",
      white: "#FFFFFF",
    },
    borderColor : {
      red: "#DC2E23",
      yellow: "#FBE639",
      dark: "#151F27",
      light: "#2E3A44",
      blackk: "#090302",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily : {
        blinker: ["Blinker", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
