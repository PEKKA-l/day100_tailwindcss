/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./day*/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['"Courier New"', 'Courier', 'sans-serif'],
      },
      animation:{
        'line-1': 'line-1 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'line-2': 'line-2 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'line-3': 'line-3 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'line-1-rev': 'animate-line-1-rev 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'line-2-rev': 'animate-line-2-rev 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'line-3-rev': 'animate-line-3-rev 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'sun-goes-down': 'sun-goes-down 4s infinite',
        'sun-goes':  'sun-goes 4s infinite ',
        'change-color-first':'change-color-first 4s infinite',
        'change-color-last':'change-color-last 4s infinite'
      },
      keyframes:{
        'line-1': {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, 10px, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(0, 10px, 0) rotate(45deg)' },
        },
        'line-2': {
          '0%': { transform: 'scale(1)', opacity:1 },
          '100%': { transform: 'scale(0)' ,opacity:0 },
        },
        'line-3': {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -10px, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(0, -10px, 0) rotate(135deg)' },
        },
        'animate-line-1-rev': {
          '0%': { transform: 'translate3d(0, 10px, 0) rotate(45deg)' },
          '50%': { transform: 'translate3d(0, 10px, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
        },
        'animate-line-2-rev': {
          '0%': { transform: 'scale(0)', opacity:0 },
          '100%': { transform: 'scale(1)' ,opacity:1},
        },
        'animate-line-3-rev': {
          '0%': { transform: 'translate3d(0, -10px, 0) rotate(135deg)' },
          '50%': { transform: 'translate3d(0, -10px, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
        },
        'sun-goes-down':{
          '0%':{opacity:100},
          '50%':{opacity:100},
          '100%':{opacity:0},
        },
        'sun-goes':{
          '0%':{
          transform: 'translate(-100%, 250%) rotate(0deg)'
          },
          '50%':{
            transform: 'translate(200%, 0%) rotate(0deg)'
          },
          '100%':{
            transform: 'translate(450%, 230%) rotate(0deg)'
          },
        },
        'change-color-first':{
          '0%': { backgroundColor: 'white' },
          '100%': { backgroundColor: 'grey' },
        },
        'change-color-last':{
          '0%': { backgroundColor: 'grey' },
          '100%': { backgroundColor: 'white' },
        }
      }
    },
  },
  plugins: [],
}

