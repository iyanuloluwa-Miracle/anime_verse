/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',"./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors:{
        "color-one":"#057dcd",
        "color-two":"#43b0f1",
        "color-three":"#fff",
        "color-four":" #aaa",
        "color-five":"#03045e",
        "bgcolor-one":"#003f5c",
        "bgcolor-two":"#f3f3f3",
        "box-shadow":"0px 4px 8px rgba(0, 0, 0, 0.15)",

      },


    },
    screens:{
      sm:"640px",
      md:"768px"
    }
  },
  plugins: [],
}

