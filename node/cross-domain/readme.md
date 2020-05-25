## 为什么会出现跨域?
浏览器的同源策略导致了跨域. 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。同源策略是一种浏览器最基本的安全机制。 一个域向另一个域发出请求,就发生了跨域。同一个域要满足三个条件: 同协议(http/https), 同域名, 同端口。只要协议、域名、端口有任何一个不同，都被当作是不同的域。总而言之，两个域不相同： 产生跨域。

## 同源策略限制下接口请求的正确打开方式

### 1.JSONP
单项跨域, 一般用来获取数据。在HTML标签里，一些标签比如script、img这样的获取资源的标签是没有跨域限制的。JSONP(json with padding)方案原理就是通过动态创建script标签，利用标签内src属性发送同步请求，并利用回调函数的方式实现异步数据的回调从而完成与后台交互的功能。当然除了jsonp方案使用script标签发送请求的办法外，还能通过img标签的src属性也同样能发送请求。

通过浏览器控制台Network选项查看发现，JSONP发出去的请求类型是script，img标签src属性发出去的请求类型是JSON，他们都不是 xhr， 因为没有形成跨域的第三个条件，因此不会触发浏览器跨域检查策略。这就是为什么JSONP 方案能处理解决跨域问题的原因。

优缺点
- 优点：它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持；并且在请求完毕后可以通过调用callback的方式回传结果。
- 缺点：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
### 2.空iframe加form
用来发POST请求。
### 3.CORS (Cross-origin resource sharing) 跨域资源共享.
基本思想就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

两种请求
- 简单请求(跨域直接发出请求)，只要同时满足以下两大条件，就属于简单请求。
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
- 非简单请求，非简单请求会发出一次预检测请求，返回码是204，预检测通过才会真正发出请求，这才返回200。这里通过前端发请求的时候增加一个额外的headers来触发非简单请求。
    - http状态码 204 （无内容） 服务器成功处理了请求，但没有返回任何内容。 
    
前后端分开部署(Access-Control-Allow-Origin)
### 4.代理Nginx
请求的时候还是用前端的域名，Nginx这个东西帮我们把这个请求转发到真正的后端域名上，从而避免跨域。

## 同源策略限制下Dom查询的正确打开方式
### 1.postMessage
window.postMessage() 是HTML5的一个接口，专注实现不同窗口不同页面的跨域通讯。

使用方法：otherWindow.postMessage(message, targetOrigin);
```
otherWindow:指目标窗口，也就是给哪个window发消息，是 window.frames 属性的成员或者由 window.open 方法创建的窗口
message: 是要发送的消息，类型为 String、Object
targetOrigin: 是限定消息接收范围，不限制请使用 '*'
```
### 2.document.domain
修改document.domain的方法只适合主域名相同，但子域名不同的iframe跨域。
### 3.canvas操作图片的跨域问题

## 补充
命令行打开 live-server 并设置端口： live-server --port=5500