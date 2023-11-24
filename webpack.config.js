const path = require('path');

module.exports = {
  entry: './pro/frontend/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'pro/frontend/static/frontend'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
  watch: true,
  // other webpack configurations...
};
