/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    extend: {
      colors: {
        blue: {
          // here we're overrriding blue 500 to be the exact colour of google's blue color
          500: '#1a73e8',
        },
      },
      spacing: {
        // by default the width only goes to 96 max
        128: '32rem',
      },
    },
  },
  plugins: [],
};
