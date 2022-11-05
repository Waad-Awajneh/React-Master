/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors: {
    //   nav: "#D9AD90",
    // },
    extend: {},
  },
  plugins: [[require("flowbite/plugin")]],
});
