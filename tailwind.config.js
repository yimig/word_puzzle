const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff'
      },
      blue: {
        light: colors.blue['100'],
        DEFAULT: '#5BA2FF',
        dark: colors.blue['400']
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: colors.pink['400'],
        dark: '#ff16d1'
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        darker: '#9CA3AF',
        DEFAULT: '#c4c4c4',
        light: '#e0e6ed',
        lightest: '#f9fafc'
      },
      yellow: {
        light: '#FEF6E8',
        DEFAULT: '#ffa500'
      },
      red: {
        lightest: colors.red['100'],
        light: colors.red['200'],
        DEFAULT: colors.red['400']
      },
      green: {
        lightest: colors.green['100'],
        light: colors.green['200'],
        DEFAULT: colors.green['400'],
        dark: '#35928b'
      },
      indigo: {
        light: colors.indigo['50'],
        DEFAULT: colors.indigo['400']
      },
      denim: {
        DEFAULT: '#3C7499',
        dark: '#3d5c71'
      }
    },
    textColor: {
      dark: '#3c4858',
      gray: '#c4c4c4',
      blue: '#5BA2FF',
      white: '#ffffff',
      bluelight: colors.blue['50'],
      yellow: colors.yellow['50'],
      red: colors.red['50'],
      green: '#01C7B0',
      indigo: colors.indigo['50'],
      pink: colors.pink['50']
    },
    borderColor: () => ({
      gray: '#c4c4c4',
      white: '#ffffff'
    }),
    fontFamily: {
      sans: ['Graphik', 'Source Han Sans', 'SimHei', 'sans-serif']
    },
    extend: {
      flexGrow: {
        2: '2',
        3: '3'
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: []
}
