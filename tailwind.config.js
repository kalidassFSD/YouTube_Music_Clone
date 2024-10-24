/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
          Roboto:['Roboto','Arial']
      },
      spacing:{
          '56':'3.5rem',
          '536':'33.5rem',
          '225':'14rem',
          '60':'3.75rem',
          '4.6':'4.6rem',
          '2.4': '2.4rem',
          '74':'74px',
          'x':'10px',
          '399'  :'399px',
          '224':'224px'
          
      }
    },
  },
  plugins: [],
}

