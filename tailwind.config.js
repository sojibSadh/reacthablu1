// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: "#772ab3",
        secondary: "#adb2b1",
        foreground: "#07292F",
        cyan: "#0FF1F6",
        gray: "#f5f5f5",
      },
      fontFamily: { montserrat: '"Montserrat", sans-serif' },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}
