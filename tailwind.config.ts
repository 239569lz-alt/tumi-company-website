import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dff1ff",
          200: "#b8e3ff",
          300: "#78ccff",
          400: "#32afff",
          500: "#078ef5",
          600: "#006fd2",
          700: "#0058aa",
          800: "#064b8a",
          900: "#0b3f72"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 80, 140, 0.12)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(7,142,245,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(7,142,245,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
