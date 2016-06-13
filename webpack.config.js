var webpack = require('webpack'); // eslint-disable-line
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  loaders: [
    {
      // I want to uglify with mangling only app files, not thirdparty libs
      test: /.*\/app\/.*\.js$/,
      exclude: /.spec.js/, // excluding .spec files
      loader: 'uglify'
    }
  ],
  plugins: [new HtmlWebpackPlugin({
    inject: 'head',
    hash: true,
    filename: 'index.html',
    template: path.join(__dirname, '/index.html')
  })]
};
