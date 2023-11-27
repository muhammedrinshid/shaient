/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': "#0F0F0F",
        'secondary': "#110F0F",
        "yellow": "#FFA800",
        "Apricot": "#EF9364",
        "Periwinkle": "#8B7BCF",
        "terinary":"#1A365D",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      backgroundImage: {
        'hero': "url('assets/images/grid.png')",
      },

    },
    screens: {
      'sm': '640px',  // Small screens and up
      'md': '768px',  // Medium screens and up
      'lg': '1024px', // Large screens and up
      'xl': '1280px', // Extra-large screens and up
      "wide": "1440px"// Wide screens and up

    }
  },
  plugins: [],
}

