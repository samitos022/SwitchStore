/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 13s linear infinite",
        "spin-medium": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
