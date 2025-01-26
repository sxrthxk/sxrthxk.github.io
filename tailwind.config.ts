import type { Config } from "tailwindcss";
import colors from "./src/styles/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "sans-serif"],
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
