
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#C5D5CB',
          light: '#DCE5E0',
          dark: '#A3BBAA',
        },
        offwhite: '#FAF9F6',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D8C295',
          dark: '#B08E4A',
        },
        dark: '#1A1A1A',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    },
  },
  plugins: [],
}
