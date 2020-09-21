module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    textColor: (theme) => {
      return {
        ...theme('colors'),
        'pale-sky': '#657687',
        green: '#05D477',
        'white-smoke': '#F4F4F4',
        black: '#0A161E',
      };
    },
    boxShadow: {
      menu: '-5px 0px 5px 2px #657687',
      profile: '-1px 0 10px 0px #657687',
    },
    extend: {
      colors: {
        'tw-green': '#05D477',
        'tw-green-light': '#06E07E',
        'tw-green-light-50': '#DAFEEE',
        'tw-green-dark': '#03703F',
        'tw-black': '#0A161E',
        'tw-pale-sky': '#657687',
        'tw-white-smoke': '#F4F4F4',
      },
      fontSize: {
        xxs: '0.675rem',
        '8xl': '5rem',
        '9xl': '6rem',
        '10xl': '7rem',
      },
    },
  },
  variants: {},
  plugins: [],
  prefix: '',
  important: true,
  purge: ['./src/**/*.tsx'],
};
