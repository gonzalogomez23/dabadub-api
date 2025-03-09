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
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          // 600: 'rgb(var(--color-primary-600) / <alpha-value>)',
        },
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        dark1: 'var(--color-dark1)',
        light1: 'rgb(var(--color-light1) / <alpha-value>)',
        border1: 'var(--color-border1)',
      },
      fontFamily: {
        headings: ["Outfit", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Sorts_Mill_Goudy", ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}

