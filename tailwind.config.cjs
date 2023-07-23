/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      textColor: {
        mostly: '#5d8aa8',
      },
      colors: {
        green: '#42b883',
        'gray-dark': '#0f172a',
        'dark-gray': '#212121',
        gray: '#575757',
        'light-gray': '#f7f7f7',
        'pure-white': '#fff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
