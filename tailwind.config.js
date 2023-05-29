/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          yellow: {
            100: '#F1E9C9',
            500: '#DBAC2C',
            800: '#C47F17',
          },
          purple: {
            100: '#EBE5F9',
            500: '#8047F8',
            800: '#4B2995',
          },
          gray: {
            100: '#D7D5D5',
            400: '#8D8686',
            500: '#574F4D',
            600: '#403937',
            700: '#272221',
          },
          white: {
            100: '#FFFFFF',
            200: '#FAFAFA',
            300: '#F3F2F2',
            400: '#EDEDED',
            500: '#E6E5E5',
          },
        },
      },
      fontFamily: {
        sans: 'Roboto',
        alt: "'Baloo 2'",
      },
    },
  },
  plugins: [],
}
