/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    flexGrow: {
      2: '10'
    },
    colors: {
      black: '#000',
      white: '#fff',
      blue: "#002B5B",
      cimon: "#EA5455",
      light: '#E4DCCF',
      lighter: '#F9F5EB',
      orange: '#FFB100',

      grey100: '#e1e3ea',
      grey200: '#e1e3ea',
      grey300: '#c8cad0',
      grey400: '#acafb9',
      grey500: '#9295a0',
      grey600: '#6c7693',
      grey700: '#5a6072',
      grey900: '#21232c',
      
      orgClr: '#F7C04A',
      blueClr: '#13005A',
      basicBg: '#F8F5E4',
      greenClr: '#92BA92',
      blueClr: '#3A98B9',


      ClrOrg: '#fdb30d',
      backgroundClr: '#ffffff',
      backgroundDark: '#000',
      backgroundPage: '#e8f5f9',
      primaryClr: '#4433ff',
      secondaryClr: '#e60067',
      decorativeClr: '#63bce9',
      successClr: '#00cc88',
      alertClr: '#ff9d00',
      

    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url(/img/svg-path.svg)"
      }
    },
  },
  plugins: [],
}