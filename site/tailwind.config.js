// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-soft": "#FBEFEF",
        "theme-pink": "#FFE2E2",
        "theme-rose": "#F5CBCB",
        "theme-mauve": "#C5B3D3",
      },
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        999: "999",
      },
    },
  },
  plugins: [],
};
