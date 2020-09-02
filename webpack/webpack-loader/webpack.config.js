const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
    entry: './src/index.js',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      contentBase: './public',
      hot: true
    },
    module: {
      rules: [
        {
          test: /(.js|.jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
            test: /(.md)$/,
            use:{
                loader: path.resolve(__dirname,'./src/md-loader.js') // 拼成绝对路径
            }
        },
        {
            test: /(.vue)$/,
            use:{
                loader: path.resolve(__dirname,'./src/vue-loader.js') // 拼成绝对路径
            }
        }
        // jsx -> createElement
        // png jpg -> base64 file-loader
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html', // 模板
        filename: 'index.html'
      }),
    ]
  }
  module.exports = config
  