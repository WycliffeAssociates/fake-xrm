const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/JSStarterKit.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'JSStarterKit.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
}

module.exports = config;
