const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
}