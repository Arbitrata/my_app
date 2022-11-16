/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      "my-black": "#000000",
      "my-orange": "#FFB01F",
      "my-blue": "#3091EF",
      "my-white": "#FFFFFF",
      "my-lightgray": "#F5F5F5",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
