/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/src/**/*.tsx', './src/renderer/index.html'],
  theme: {
    extend: {
      colors: {
        'design-system': {
          gray: {
            700: '#282828',
            800: '#252525',
          },
          schemes: {
            'inverse-on-surface': '#f5eff7',
            'on-surface-variant': '#49454f',
          },
          blue: {
            600: '#6988E6',
          },
        },
      },
      fontFamily: {
        'kumbh-sans': '"Kumbh Sans", sans-serif',
      },
    },
  },
  plugins: [],
}
