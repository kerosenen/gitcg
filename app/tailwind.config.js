module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#CACAAA",
        brown: "#322A26",
        peach: "#EEC584",
        tan: "#AD6A6C",
        blue: "#55868C",
      },
      animation: {
        shimmer: "shimmer 1.2s ease-in-out",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
      },
    },
  },
  plugins: [],
};