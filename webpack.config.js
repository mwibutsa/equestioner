const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.html$/, use: [{ loader: 'html-loader' }] },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'], // enable resolving jsx files without specifying extensions during import
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html',
    }),
    new ErrorOverlayPlugin(), // enable displaying errors in the browser 1 + 2
  ],
  devtool: 'cheap-module-source-map', // enable displaying errors in the browser 2 + 1
};
