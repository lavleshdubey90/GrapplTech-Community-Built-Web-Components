/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#0A74DA",
        brightCyan: "#00BFAE",
        darkBlue: "#010F32"
      }
    },
  },
  plugins: [],
}