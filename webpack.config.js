const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },

  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}