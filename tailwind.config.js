/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
      "custom-mod-violet": "#7541c8",
      "custom-very-dark-grayish-blue": "#48556a",
      "custom-very-dark-blackish-blue": "#19212e",
      "custom-light-gray": "#cfcfcf",
      "custom-light-grayish-blue": "#ecf2f8",
      }
    },
    fontFamily: {
      "Barlow Semi Condensed": ["Barlow Semi Condensed", "sans-serif"]
    }
    
  },
  plugins: [],
}
