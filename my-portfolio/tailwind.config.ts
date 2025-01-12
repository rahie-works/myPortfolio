import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titles: ["Josefin Sans", "cursive"],
        subtitles: ["Briem Hand", "cursive"],
        name: ["Briem Hand"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
