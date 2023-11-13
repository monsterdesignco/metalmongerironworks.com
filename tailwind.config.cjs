const config = {
  content: ['./src/**/*.{html,js,svelte,ts,md}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['DIN', 'sans-serif'],
        heading: ['Varna', 'sans-serif']
      },
      aspectRatio: {
        '3/4': '3 / 4'
      },
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FEF4EE',
          100: '#FDE7D7',
          200: '#FBCBAD',
          300: '#F8A679',
          400: '#F47D4C',
          500: '#F0541F',
          600: '#E13B15',
          700: '#BB2913',
          800: '#952317',
          900: '#781F16'
        },
        gray: {
          50:  '#F8F7F8',
          100: '#F0EEEE',
          200: '#DED9DA',
          300: '#C1B8BB',
          400: '#9F9196',
          500: '#847379',
          600: '#6C5D62',
          700: '#584C50',
          800: '#4B4144',
          900: '#41393B'
        }
      }
    }
  }
};

module.exports = config;