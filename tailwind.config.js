/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: "#0d0d0d",
        paper: "#f3efe7",
        ember: "#a63b32",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 80px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
};
