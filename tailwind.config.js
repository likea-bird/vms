/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '76': '19rem',
        '84' : '21rem',
        '100': '25rem',
        '120' : '30rem',
      }
    },
  },
  plugins: [],
}
