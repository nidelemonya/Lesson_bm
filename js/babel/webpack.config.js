const path = require('path');
const config = {
    entry: path.resolve(__dirname, './src/index.js'),
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
      rules: [
        {
          test: /(.js|.jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    }
  }
  module.exports = config
  