## babel
cnpm i @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
- @babel/core 核心代码
-  @babel/preset-env 运行环境

1. npx babel app.js --out-dir dist (--out-dir 输出目录)

presets(预设) 包含诸多 plugins(插件)


## webpack
- cnpm i webpack webpack-cli babel-loader -D
-D 表示 只在开发环境中运行

cnpm i react react-dom -S 
既要在开发环境中使用 又要在生产环境中使用

cnpm i webpack-dev-server -D
浏览器热更新

npx webpack-dev-server 在 nodemodules  中 查找 相关命令

- cnpm i --save-dev html-webpack-plugin
自动化生成 html 
public 目录下的 html 为模板


## package.json
"scripts": {
    "build": "webpack --mode production",                   // 开发环境
    "start": "webpack-dev-server --mode development"
  }


dist 存着 就是一个 最终打包的结果
dist 最终上线的一个文件夹


live-server 启动 查看 图片


css-loader 只处理 css 文件的引入 但是没有解析
style-loader 用于处理 css 文件的内容