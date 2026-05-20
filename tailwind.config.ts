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
        secondary: "#24c8c1",
        darkBg: "#131424",
      },
      backgroundImage: {
  "gradient-cover":
    "linear-gradient(135deg, rgba(0,0,0,1) 100%, rgba(58,196,193,0.6) 0%)",
},

    },
  },
  plugins: [],
};
export default config;
