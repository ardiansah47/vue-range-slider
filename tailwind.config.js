/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        primary: {
          DEFAULT: '#0072bc',
          50: '#eff9ff',
          100: '#bce5ff',
          200: '#89d1ff',
          300: '#56bcff',
          400: '#23a8ff',
          500: '#0072bc',
          600: '#005389',
          700: '#003456',
          800: '#001523',
          900: '#000000',
          dark: '#1F2937'
        },
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

