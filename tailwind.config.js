/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '60deg': '60deg',
        '31deg':'31deg'
    },
      width : {
        '520px':'520px',
        '270px':'270px'
    },
      spacing : {
        '580px':'580px',
        '980px' :'980px',
        '1550px':'1550px',
        '420px':'420px',
        '440px':'480px',
        '363px':'363px',
        '800px':'800px',
        '850px':'850px'
    },
      container : {
        padding: '',

    },
      padding : {
        '170px':'158px'
      }
  },
  plugins: [],
}
}