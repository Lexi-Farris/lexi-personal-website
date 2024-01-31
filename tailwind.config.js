/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      oranges: {
        100: "#F7B267",
        200: "#F79D65",
        300: "#F4845F",
        400: "#F27059",
        500: "#F25C54",
      },
      "blue-greens": {
        100: "#90BE6D",
        200: "#43AA8B",
        300: "#4D908E",
        400: "#577590",
        500: "#277DA1",
      },
      "warm-colors": {
        100: "#F94144",
        200: "#F3722C",
        300: "#F8961E",
        400: "#F9844A",
        500: "#F9C74F",
      },

      extend: {},
    },
  },
  plugins: [],
};
