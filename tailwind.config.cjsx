/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: { 
    fontFamily:{
      primary:'Russo One',
      secondary:'Sora'
    },
    screens:{
      sm:"640px",
      md:"768px",
     lg:"1024px",
     xl:"1192px",  
    },
    extend: {
      colors:{
        primary:"#2e78c7",
        accent:"#e3426f",
      }
    },
  },
  plugins: [],
}
