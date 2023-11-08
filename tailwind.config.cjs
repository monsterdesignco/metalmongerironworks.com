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
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
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