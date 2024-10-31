/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        headings: ["Montserrat", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

