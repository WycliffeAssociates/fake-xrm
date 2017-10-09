const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/index.js',
  output: {
    // If not bundling for a library, remove library and libraryTarget
    library: 'FakeXrm',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
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
