## 什么是跨域?
- 浏览器的同源策略导致了跨域. 
- 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
- 同源策略是一种浏览器最基本的安全机制。
- 一个域向另一个域发出请求,
- 同一个域: 同协议(http/https), 同域名, 同端口
- 两个域不相同： 产生跨域

## 跨域正确的打开方式
###  CORS(跨域资源共享"(Cross-origin resource sharing)).
- 两种请求
    - 简单请求(跨域直接发出请求)
        - 只要同时满足以下两大条件，就属于简单请求。
            1. 请求方法是以下三种方法之一：
                - HEAD
                - GET
                - POST
            2. HTTP的头信息不超出以下几种字段：
                - Accept
                - Accept-Language
                - Content-Language
                - Last-Event-ID
                - Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
    - 非简单请求
        - 非简单请求会发出一次预检测请求，返回码是204，预检测通过才会真正发出请求，这才返回200。这里通过前端发请求的时候增加一个额外的headers来触发非简单请求。
        - http状态码 204 （无内容） 服务器成功处理了请求，但没有返回任何内容。 
            1. OPTIONS preflight /api
            2. POST /api

- 前后端分开部署(Access-Control-Allow-Origin)
### JSONP
- 在HTML标签里，一些标签比如script、img这样的获取资源的标签是没有跨域限制的。
- 不同 xhr fetch， 不受跨域限制：
    - img
    - link
## http 头
- 请求头：accept

- 响应头：Set-Cookie：

- 通用头：Content-Type：
    - 请求的时候带给后端的内容的类型 www-url../ text/plain, formdata, application/json
    - 后端告诉前端我给资源的类型： MIME

## 补充
命令行打开live-server并设置端口： live-server --port=5500

服务端可以设置httpOnly，使得前端无法操作cookie, 如果没有这样的设置，像XSS攻击就可以去获取到cookieWeb安全测试之XSS; 设置secure，则保证在https的加密通信中传输以防截获。