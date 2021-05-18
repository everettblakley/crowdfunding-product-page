module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-cyan': 'hsl(176, 50%, 47%)',
        'dark-cyan': 'hsl(176, 72%, 28%)',
        'lighter-gray': '#FAFAFA',
        'light-gray': '#707070',
        'dark-gray': '#b1b1b1',
        'darker-gray': '#2F2F2F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
