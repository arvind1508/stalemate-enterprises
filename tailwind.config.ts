import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B1E33",
          deep: "#081629",
          gold: "#D4AF37",
          text: "#FFFFFF",
          muted: "#C9C9C9"
        }
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 20px 60px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #081629 0%, #0B1E33 55%, #0E2742 100%)"
      }
    }
  },
  plugins: []
};

export default config;
