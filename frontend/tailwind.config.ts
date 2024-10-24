import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#c32c2b",
        yellow: "#f1cb19",
        purple: "#4a6091",
      },
    },
  },
  plugins: [],
} satisfies Config;
