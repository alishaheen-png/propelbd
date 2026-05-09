import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#060608",
        offblack: "#0c0c10",
        card: "#111116",
        cardhover: "#16161d",
        gold: { DEFAULT: "#c9a84c", light: "#e8c97a" },
        bone: "#f5f0e8",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        mono: ['"DM Mono"', "monospace"],
        sans: ['"Syne"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        meshShift: {
          "0%, 100%": { opacity: "1", filter: "blur(0px)" },
          "50%": { opacity: "0.6", filter: "blur(2px)" },
        },
        bookingPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.12)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        meshShift: "meshShift 12s ease-in-out infinite alternate",
        bookingPulse: "bookingPulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
