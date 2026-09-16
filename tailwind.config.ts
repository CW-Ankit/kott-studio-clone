import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4f5f7",
        "paper-dim": "#e8eaee",
        ink: "#101113",
        "ink-soft": "#26282c",
        muted: "#62656c",
        accent: "#0037ff",
        "accent-on-ink": "#0037ff",
        "io-magenta": "#ff3060",
        line: "rgba(16, 17, 19, 0.14)",
        "line-paper": "rgba(244, 245, 247, 0.16)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        sans: ["var(--font-instrument)", "var(--font-grotesk)", "Instrument Sans", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-martian)", "Martian Mono", "ui-monospace", "monospace"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "typeset-swap": "typeset-swap 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          to: { transform: "translate(-100%)" },
        },
        "typeset-swap": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
