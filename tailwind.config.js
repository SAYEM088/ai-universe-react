/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9effa2",

          "secondary": "#8899fc",

          "accent": "#f49ca8",

          "neutral": "#16141F",

          "base-100": "#25224F",

          "info": "#6E95E7",

          "success": "#2CCE72",

          "warning": "#F09A38",

          "error": "#EC3722",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
