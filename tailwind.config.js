module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
        ],
      },
      colors: {
        'brand': '#a6d1c9',
        'brand-dark': '#152238',
        'highlight': '#c9a6d1',
      },
      backgroundImage: {
        poly: 'url(/icons/poly.svg)',
        lines: 'url(/icons/lines.png)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
