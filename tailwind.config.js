/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#363C43',
        customgray:"#6F787C",
        semiTransparentBlack: '#00000033',
        white08: '#FFFFFF08',
        darkGray: '#171717',
        textcolor:" #969696"

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
      },
      boxShadow:{
        'boxSmall': 'rgba(0, 0, 0, 0.9) 0px 60px 40px -7px',
        

      }
    },
    raleway:[ "Raleway"],
   
  },
  plugins: [],
}

