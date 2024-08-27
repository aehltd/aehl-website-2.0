import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}"  
  ],
  theme: {
    fontSize: {
      'xxs': "0.625rem",
      'xs': '0.75rem',
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
      "8xl": "6rem",
    },
    colors: {
      // Configure your color palette here
      'white': '#FFFFFF',
      'midnight': '#272727',
      'green': '#50D890',
      'tealD': '#D2D3D3',
      gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0', // This is gray-500
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      slate: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#121416',
        },


    },
    extend: {
      screens: {
        'lg-half': '512px',
        '2xl': '1536px',
        '2xl-half': '768px',
        '3xl': '1920px',
        '3xl-half': '960px',
        '4xl': '2560px'
      },
      maxWidth: {
        'lg-half': '512px',
        '2xl': '1536px',
        '2xl-half': '768px',
        '3xl': '1920px',
        '3xl-half': '960px',
        '4xl': '2560px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 90%)",
      },
    },
  },
  plugins: [],
};

export default config;
