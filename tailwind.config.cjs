/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hackerGreen: "#ffffff",   // neon hacker green
        hackerDark: "#0A0F0D",    // deep black-green background
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        glow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
