/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lulu: {
          red: '#d31334',
          black: '#000000',
          white: '#ffffff',
          gray: {
            light: '#f5f5f5',
            medium: '#d5d5d5',
            dark: '#666666'
          }
        }
      },
      fontFamily: {
        sans: ['Calibre', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
