// css.css 样式
// import

const webpack = require("webpack")

// export
module.exports = function (source) {
    console.log(source)
    return `export default \`${source}\``
}

// babel-loader 工作原理
// const babel = require('@babel/core')
// function (source) {
//     // es5
//     return babel.compiler(source);
// }

// plugin
// webpack 打包会有一系列的生命周期
// 监听 webpack 的生命周期(钩子函数) (option, run emit done)
// html-webpack-plugin 为例
// webpack 打包完资源的时候 把得到的资源 插到 html 里面
