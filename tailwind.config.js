/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-bg": "rgba(0, 0, 0, 0.4)",
        "background-color": "#202142",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#FCD34D",
      },
    },
  },
  plugins: [],
};
