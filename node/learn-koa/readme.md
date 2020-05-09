## Tencent 腾讯 ##

基石?    c语言
语言使用排名 
c++, js, go, java, python

腾讯 网络虚拟传呼机
qq 连接一切 即时通讯 TCP/IP 协议

HTTP TCP/IP UDP WebSocket

## koa ##
- koa  node web 开发框架
    7天后 blog 网站
- 背后的 基石是什么?
    koa 加速了 node web 开发, 一个web 服务就是一个web app
    koa 在 3000端口上提供了http协议访问,
    https://127.0.0.1:3000  图解http

    http.createServer() 启动服务
    http node 内置模块 createServer 启动服务
    koa 封装了他们

    http 协议本质是干什么的?
    ctx context 上下文环境(request, response)
    http 协议 诞生于1991年, 用于传输学术论文的。
    采用基于请求(ctx.request)响应(ctx.response)的模式, 在网络间传输HTML
    超文本的内容 HTTP/0.9 1991年

- HTTP(web server 应用层协议) 基于 TCP(Transmission Control Protocol)协议
    TCP 用户 (移动或电信) 运营商提供的动态IP, 网站 阿里云(IP) 传输, html
    - ▪ 应用层    HTTP
    - TCP 连接 三次握手
    - ▪ 表示层
    - ▪ 会话层
    - ▪ 传输层    TCP
    - ▪ 网络层
    - ▪ 数据链路层
    - ▪ 物理层
- 建立连接后, 会发送一个GET请求行(request method GET url /)的信息
    GET / template.html
- 服务器接收到请求信息后, 读取对应的HTML 文件, 并将数据以ASC 返回给用户浏览器
- 断开连接
