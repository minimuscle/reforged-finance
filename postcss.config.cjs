module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true,
    },
    'postcss-simple-vars': {
      variables: {
        xs: '36em', //576px
        sm: '48em', //768px
        md: '62em', //992px
        lg: '75em', //1200px
        xl: '88em', //1408px
      },
    },
  },
}
