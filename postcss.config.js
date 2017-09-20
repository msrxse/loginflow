/**
  * Tells postCSS which plugins to use
  **/
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'], // This is for Autoprefixer, which comes built-in
    },
  },
};
