var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  template: 'node_modules/html-webpack-template/index.ejs',
};

module.exports = {
  entry: {
    src: PATHS.src
  },
  devtool: 'source-map',
  output: {
    path: PATHS.dist,
    filename: 'main.min.js',
    libraryTarget: 'umd',
    library: 'Main'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      template: PATHS.template,
      title: 'main',
      appMountId: 'app',
      inject: false
    }),
    new CleanPlugin([PATHS.dist], {
      verbose: false
    })
  ],
  resolve: {
    extensions: ["", "web.js", ".js"]
  }
};
