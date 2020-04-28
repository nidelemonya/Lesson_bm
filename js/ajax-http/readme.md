## 协议
前端fe  <=>   http  <=>   后端rd(数据库) 前端后端通过http协议交互
fe: 李宗盛 传给 后端
后端: 李宗盛 歌传给前端

两方传输数据,都要遵守 http 协议(规则)
浏览器: http 方式去要资源
App http

## ajax



## 同步
一行接着一行的执行
## 异步
代码书写的顺序，并不是执行的顺序

## node
- js chrome： v8 解释执行js
- 页面渲染
- 网络请求

js 只在浏览器里面运行

v8 单独拿到服务端(就是node)

<!-- 用 node 环境解释执行 index.js -->
node index.js

1. 双击
file:///E:/Lesson_bm/js/ajax-http/ajax.html
file: 协议

2. live-server
http://127.0.0.1:5500/js/ajax-http/ajax.html
http://localhost:5500/js/ajax-http/ajax.html
http: 协议
127.0.0.1 IP 地址  特点：四个数字 (0~255)
等同
localhost 域名
ajax.html 文件 放到一个服务器上(这里是本地服务器)

https://www.baidu.com/  方便人类记忆
61.135.169.121:443
为什么 通过 IP 就能启动?

端口存在的目的:
一台服务器 (电脑), 运行很多东西 
port： 区别每一个应用
ip 地址能够找到你这台电脑

假设：
数据库 占用 8060 端口
提供搜索服务 占用 443 端口
... 占用其他端口 ...



## http 规定
- 请求行
    - 方法: GET juejin.com?query=js
    - url: juejin.com?query=js 
    - 版本: 1.1
- 首部(头部)
    - key:value
    - Content-Type 内容类型是什么
- 实体
    - 传输的具体的数据