/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: '20px',
    },
    extend: {
      fontFamily : {
       lato : ['"Lato", sans-serif'],
       josef : ['"Josefin Sans", sans-serif']
      }
    },
  },
  plugins: [],
}

