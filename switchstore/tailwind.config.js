/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 13s linear infinite",
        "spin-medium": "spin 4s linear infinite",
        'infinite-scroll': 'infinite-scroll 55s linear infinite',
        "slide-in-left": "slide-in-left 0.6s ease-out"
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "slide-in-left": {
          "0%": {
            "transform": "translateX(0px)"
          },
          "100%": {
            "transform": "translateX(-20PX)"
          }
        }

      },
    }
  },
  plugins: [],
};
