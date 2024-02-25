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
        '270px':'270px',
        '267px':'267px',
        '365px':'365px',
        'xd':'20%',
        'xdd':'13%',
        'xddd':'18%',
        'xdddd':'22%',
    },
      spacing : {
        '580px':'580px',
        '980px' :'980px',
        '1550px':'1550px',
        '420px':'420px',
        '440px':'480px',
        '363px':'363px',
        '800px':'800px',
        '850px':'850px',
        'ha':'54.5%',
        'haa':'15.5%',
        'haaa':'19.8%',
        'bo':'19.5%'
    },
      container : {
        padding: '',

    },
      padding : {
        '158px':'10%',
        'xd':''
      }
  },
  plugins: [],
}
}