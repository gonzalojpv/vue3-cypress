/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        green: '#42b883',
        'gray-dark': '#0f172a',
      },
    },
  },
  plugins: [],
}
