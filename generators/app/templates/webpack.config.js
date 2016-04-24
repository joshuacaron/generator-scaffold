var webpack = require('webpack')

module.exports = {
  output: {
    path: __dirname + '/dist/',
    filename: '[name]',
  },
  devtool: 'source-map',
  entry: {
    'index.js': './containers/index.jsx',
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
      },
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          compact: false,
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
}
