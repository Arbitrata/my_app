/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      "my-black": "#000000",
      "my-orange": "#ff8c00﻿",
      "my-blue": "#00A4CCFF",
      "my-white": "#FFFFFF",
      "my-lightgray": "#F5F5F5",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
