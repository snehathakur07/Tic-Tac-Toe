/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./output/*.{html,js,css}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        oxford:"#0A2239",
        moonstone:"#53A2BE",
        lapis:"#176087",
        bluencs:"#1D84B5",
        gunmetal:"#132E32"
      }
    },
  },
  plugins: [],
}

