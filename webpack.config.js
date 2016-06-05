var webpack = require('webpack'); // eslint-disable-line
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    inject: 'head',
    hash: true,
    filename: 'index.html',
    template: path.join(__dirname, '/index.html')
  })]
};
