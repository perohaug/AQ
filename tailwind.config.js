module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    minWidth: {
      40: '10rem',
      60: '15rem',
      80: '20rem',
      100: '25rem',
    },
    maxWidth: {
      120: '30rem',
      160: '40rem',
      200: '50rem',
    },
  },
  variants: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          background: '#F2EBDF',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          badgeColor: '#192E54',
          'base-100': '#ffffff',
          knapp: '#FC8861',
        },
      },
    ],
  },
};
