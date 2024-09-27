/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DCBFFF",
          100: "#D0A2F7",
          200: "#9747FF",
        },
        black: {
          DEFAULT: "#000",
        },
        gray: {
          100: "#F6F6F6",
          200: "#C4C4C4",
          300: "#A0A0A0",
          400: "#626263",
        },
      },
      fontFamily: {
        flight: ["Fredoka-Light", "sans-serif"],
        fregular: ["Fredoka-Regular", "sans-serif"],
        fmedium: ["Fredoka-Medium", "sans-serif"],
        fsemibold: ["Fredoka-SemiBold", "sans-serif"],
        fbold: ["Fredoka-Bold", "sans-serif"],
      },
      boxShadow: {
        'custom-drop': '0 6px 4px rgba(0, 0, 0, 0.25)', 
      },
    },
  },
  plugins: [],
};

