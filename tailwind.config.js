/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'green': '#55A5C5',
      'black': '#000000',
      'white': '#ffffff',
      'l-black': '#494947',
    },
    extend: {
      fontFamily: {
        body: ['Inter'],
        copper: ["Copperplate", "sans-serif"],
      },
    },
  },
  plugins: [],
}