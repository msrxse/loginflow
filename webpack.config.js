// const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        options: {
          fix: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      // Loaders for other file types can go here

    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
