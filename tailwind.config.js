/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nspl: {
          gold: "#D4A017",
          goldDark: "#B8860B",
          brown: "#5C3A0B",
          copper: "#8B5E34",
          sand: "#F0E0C0",
          beige: "#F3E6D3",
          cream: "#FDFBF6",
          charcoal: "#2F2E2E",
          deep: "#1E1A16",
          paleGold: "#F9E7B7"
        }
      },
      boxShadow: {
        gold: "0 12px 40px rgba(212,160,23,.16)"
      }
    }
  },
  plugins: []
};