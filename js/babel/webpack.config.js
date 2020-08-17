const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动打包生成 html 文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 模块分析
const CopyPlugin = require('copy-webpack-plugin') // 图片拷贝
const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [{
        test: /(.js|.jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        // use: ['style-loader','css-loader'], 
        // css-loder 负责引入 css 文件
        // style-loader css 内容 插到 html 的 style 的标签之内

        // css module
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]'
                // 生成 哈希随机 样式名 (防止 css 命名冲突)
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [{
        from: './public/lemon.png',
        to: './'
      }, ],
    }),

  ]
}
module.exports = config