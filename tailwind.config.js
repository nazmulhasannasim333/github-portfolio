/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },

      extend: {
        screens: {
          "4k": "1980px",
        },
      },

      colors: {
        "primary-title": "#00AEFF",
        "primary-text": "#FFFFFF",
        "primary-icon": "#2DDE98",
        "primary-bg": "#050F2C",
        // "card-bg": "#09131b"
      },
      keyframes: {
        flip: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
      },
      animation: {
        flip: "flip 1s ease-in-out 0.25s 1",
      },
    },
  },
  plugins: [],
};
