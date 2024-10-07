/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./day*/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['"Courier New"', 'Courier', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

