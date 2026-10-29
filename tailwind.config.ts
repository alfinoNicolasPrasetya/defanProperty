import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0D1B2A",
          DEFAULT: "#14283D",
          light: "#1D3550",
          soft: "#284566",
        },
        charcoal: {
          900: "#181C21",
          DEFAULT: "#20252B",
          light: "#2E353E",
        },
        ivory: {
          DEFAULT: "#F7F5F0",
          soft: "#FDFCF7",
          dark: "#EFECE4",
        },
        gold: {
          DEFAULT: "#C6A66B",
          light: "#D8BC88",
          soft: "#F1E7D5",
          dark: "#A38349",
        },
        muted: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
          dark: "#4B5563",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(20, 40, 61, 0.04)",
        card: "0 10px 30px -5px rgba(20, 40, 61, 0.08)",
        floating: "0 20px 40px -10px rgba(20, 40, 61, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
