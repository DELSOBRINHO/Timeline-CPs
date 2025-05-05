module.exports = {
  purge: [
    './**/*.html',
    './js/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'cldf-blue': {
          light: '#4299e1',
          DEFAULT: '#2b6cb0',
          dark: '#1a365d',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
