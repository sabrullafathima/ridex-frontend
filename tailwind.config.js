/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveVehicle: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(120vw)" },
        },
      },
      animation: {
        moveVehicle: "moveVehicle linear forwards",
      },
    },
  },
  plugins: [],
};
