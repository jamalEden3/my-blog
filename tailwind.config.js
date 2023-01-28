/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    colors: {
      textClr: '#0a0c10',
      backgroundClr: '#ffffff',
      backgroundPage: '#e8f5f9',
      primaryClr: '#4433ff',
      secondaryClr: '#e60067',
      decorativeClr: '#63bce9',
      successClr: '#00cc88',
      alertClr: '#ff9d00',
      grey100: '#e1e3ea',
      grey200: '#e1e3ea',
      grey300: '#c8cad0',
      grey400: '#acafb9',
      grey500: '#9295a0',
      grey600: '#6c7693',
      grey700: '#5a6072',
      grey900: '#21232c',

    },
    extend: {},
  },
  plugins: [],
}