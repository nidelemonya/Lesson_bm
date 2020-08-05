## GET POST
- HTTP GET 方法请求指定的资源。使用 GET 的请求应该只用于获取数据。
- GET
    把参数包含在URL中
- POST
    通过request body传递参数
    是放在querystring  body里面(a=1&b=2)

在浏览器 img link script GET参数只能放到url 里面去了

xmlhttprequest 只要服务端约定好， 参数放到哪里是不受限制的

从协议本身来说， 并没有限制 GET 传递 参数不能放到 body
POST 传递参数 也可以放到 querstring

- 语义不一样， GET POST
- GET 资源可以缓存
- GET url 长度有限 (浏览器)，post req body 不限制的
- GET 不安全 POST 更安全一点。其实都是不安全的，http 明文传输，https