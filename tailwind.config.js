/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'mainOrange': '#EDA415',
      'mainBlue': '#003F62',
      'headingColor': '#292D32',
      'textColor': '#3A3A3A',
      'textWhite': '#fff'
      }
    },
  },
  plugins: [],
}

