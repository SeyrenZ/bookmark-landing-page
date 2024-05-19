import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#FA5959",
          blue: "#5267DF",
          darkBlue: "#242A45",
          gray: "#9194A2:",
        },
      },
    },
  },
  plugins: [],
};
export default config;
