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
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(10)",
          },
          "100%": {
            transform: "translateX(-160%)",
          },
        },
      },
    },
  },
  plugins: [
    // Include the third-party plugin
    require("tailwindcss-animated"),
  ],
};
export default config;
