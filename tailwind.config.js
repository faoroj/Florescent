/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
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
    },
  },
  plugins: [],
}

