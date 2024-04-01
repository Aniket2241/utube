/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { customRed: "#ff0000" },
    },
    screens: {
      sm: "1242px",
      // => @media (min-width: 640px) { ... }

      md: "700px",
      // => @media (min-width: 768px) { ... }

      lg: "450px",
      // => @media (min-width: 1024px) { ... }

      xl: "1780px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1836px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
