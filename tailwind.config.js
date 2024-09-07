// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tileOpen: {
          "0%": { opacity: "0", transform: "translateY(10px) scaleY(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        tileOpen: "tileOpen 0.5s ease-out forwards",
        shimmer: "shimmer 1.5s infinite linear",
      },
    },
  },
  plugins: [],
};
