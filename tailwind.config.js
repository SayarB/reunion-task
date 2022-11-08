/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#6E63ED",
        dark:"#4E338D",
        light:"#E8E5F8",
        background:"#F8F7FD",
      },
      screens:{
        filterbarbreakpoint: "1136px"
      },
      fontFamily:{
       serif:"'Poppins', sans-serif" 
      }
    },
    
    
  },
  plugins: [],
}