/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom,rgb(17,17,17), rgba('#28b485',0.8)), url('./images/banner.png')",
      },
    },
  },
  plugins: [],
};
