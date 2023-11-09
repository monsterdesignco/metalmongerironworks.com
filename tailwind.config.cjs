const config = {
  content: ['./src/**/*.{html,js,svelte,ts,md}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

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
          400: '#9F9196',
          500: '#584C50',
        }
      }
    }
  }
};

module.exports = config;