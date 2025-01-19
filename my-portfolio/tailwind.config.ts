import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-glass":
          "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
      colors: {
        "blue-glass": "rgba(0, 0, 255, 0.2)",
      },
      blur: {
        custom: "10px",
      },
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
            transform: "translateX(-148%)",
          },
        },
      },
    },
  },
  plugins: [
    // Include the third-party plugin
    require("tailwindcss-animated"),

    // Define your custom plugin
    plugin(function ({
      addComponents,
      theme,
    }: {
      addComponents: any;
      theme: any;
    }) {
      addComponents({
        ".glass-effect": {
          background: theme("backgroundImage.gradient-glass"),
          borderRadius: theme("borderRadius.xl"),
          backdropFilter: `blur(${theme("blur.custom")})`,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: `1px solid ${theme("colors.blue-glass")}`,
        },
        ".centered-flex": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      });
    }),
  ],
};
export default config;
