/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#E6F7FF',
          200: '#B3D9FF',
          300: '#80BBFF',
          400: '#4D9DFF',
          500: '#1A80FF'
        },
        'accent': {
          100: '#FFE6E6',
          200: '#FFB3B3',
          300: '#FF8080',
          400: '#FF4D4D',
          500: '#FF1A1A'
        },
        'background': {
          'dark': {
            'primary': '#F2F8FF',
            'accent': '#FFF1F1'
          },
          'light': {
            'primary': '#001E3C',
            'accent': '#3C0000 '
          }
        }
      }
    },
  },
  plugins: [],
}

