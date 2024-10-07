/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom1: ["Clash-Regular", "sans-serif"],
      custom2: ["Clash-Medium", "sans-serif"],
      custom3: ["Clash-Semibold", "sans-serif"],
      custom4: ["Open-Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}