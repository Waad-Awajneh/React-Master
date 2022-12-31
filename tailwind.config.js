/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      lnav: "#D9AD90",
      lb: "#DFCDC1",
      pcol: "#CA895E",
    },

    extend: {},
    screens: {
      cover: { max: "500px" },
      card: { min: "500px" },
    },
  },
  plugins: [[require("flowbite/plugin")]],
});
