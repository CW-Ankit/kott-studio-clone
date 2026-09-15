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
        brand: {
          purple: "#7c27a3",
          purpleDark: "#682f87",
          purpleDeep: "#782c8a",
          red: "#d93232",
          redDark: "#c70000",
          green: "#57c25f",
          greenDark: "#00ad09",
          greenSoft: "#77ab62",
          blue: "#4ca2db",
          blueLight: "#d9e9f7",
          cream: "#fcfbef",
          bgLight: "#efefef",
          bgSoft: "#f0f0f0",
          dark: "#1e1e1e",
          grayMuted: "#787878",
          grayBorder: "#c9c9c9",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      keyframes: {
        flash: {
          "0%": { transform: "translateX(-100%)" },
          "20%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        flash: "flash 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
