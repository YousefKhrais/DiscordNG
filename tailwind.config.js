/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          primarylight: "#313338",
          primarydark: "#1E1F22",
          primarydefault: "#2B2D31",
        },
      },
      dropShadow: {
        'discord-dark': '0px 1px 1px rgba(0, 0, 0, 0.50)',
        'discord-light': '0px 1px 1px rgba(0,0,0, 0.25)'
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
}