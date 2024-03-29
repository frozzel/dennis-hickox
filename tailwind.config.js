/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#272727",
        "dark-subtle": "rgba(255, 255, 255, 0.5)",
        "light-subtle": "rgba(39, 39, 39, 0.5)",
        "highlight-dark": "#E9D5DA",
        highlight: "#827397",
        "warning": "#F5CD19",
        "run": "#DC143C",
        "good": "#5BE12C",
        "back-ground": "#ffffff",
      },
    },
  },
  plugins: [],
};