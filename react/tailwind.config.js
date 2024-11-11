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
        dark1: 'var(--color-dark1)',
        light1: 'var(--color-light1)',
        border1: 'var(--color-border1)',
      },
      fontFamily: {
        headings: ["Outfit", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

