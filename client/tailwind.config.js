/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#D2171D",
          2: "#D1464A",
          3: "#D17477",
          4: "#D1A3A4",
        },
        n: {
          1: "#373737",
          2: "#434343",
          3: "#4F4F4F",
          4: "#5A5A5A",
          5: "#656565",
        },
      },
    },
  },
  plugins: [],
};
