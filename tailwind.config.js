/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontSize: {
      'xxs': "0.5rem",
      'xs': "0.75rem",
      'sm': "0.875rem",
      'base': "1rem",
      'lg': "1.125rem",
      'xl': "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      },
      maxWidth: {
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",
      },
    },
  },
  plugins: [],
};
