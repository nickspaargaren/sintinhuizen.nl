import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/content/**/*.md",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        alfaSlabOne: ["Alfa Slab One", "sans-serif"],
        courgette: ["Courgette", "sans-serif"],
      },
      colors: {
        red: "#c32c2b",
        yellow: "#f1cb19",
        purple: "#4a6091",
      },
      dropShadow: {
        line: "0px 2px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
