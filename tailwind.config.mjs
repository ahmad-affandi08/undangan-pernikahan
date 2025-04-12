/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fdfaf5",
        "dusty-rose": "#b97a85",
        "brown-text": "#5c3d2e",
        "dusty-text": "#734b44",
      },
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        vibes: ['"Great Vibes"', "cursive"],
        libre: ['"Libre Baskerville"', "serif"],
        script: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
