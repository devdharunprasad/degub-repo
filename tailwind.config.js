/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend : {
      colors:{
        "primary" : "#2A8887",
        "footer_green" : "#357C7C",
        "light_green" : "#4DB188",
        "green_shade" : "#F8FDFD",
        'service_green' : "#E7F5F1",
        "grayish" : "#DADFDF",
        "darkgreen" : "#349A99",
        "military_green" : "#284D4C",
        "navy_blue" : "#042E46"
       }
    }
 
  },

  plugins: [],
}
