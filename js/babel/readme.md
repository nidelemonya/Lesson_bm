## babel
cnpm i @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
- @babel/core 核心代码
-  @babel/preset-env 运行环境

1. npx babel app.js --out-dir dist (--out-dir 输出目录)

presets(预设) 包含诸多 plugins(插件)


## webpack
cnpm i webpack webpack-cli babel-loader -D
-D 表示 只在开发环境中运行

cnpm i react react-dom -S 
既要在开发环境中使用 又要在生产环境中使用

cnpm i webpack-dev-server -D
浏览器热更新

npx webpack-dev-server 在 nodemodules  中 查找 相关命令