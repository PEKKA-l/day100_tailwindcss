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
      }
    },
  },
  plugins: [],
}

