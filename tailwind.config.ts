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
          900: "#0B2A55",
          800: "#13386B",
          700: "#1B4782",
        },
        brand: {
          500: "#1F5FAD",
          600: "#174A89",
          700: "#123868",
        },
        blue: {
          50: "#EEF4FB",
          25: "#F5F8FC",
        },
        text: {
          600: "#3D4F66",
        },
        border: {
          100: "#E4EAF2",
        },
        accent: {
          route: "#F28C28",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
