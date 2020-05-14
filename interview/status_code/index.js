var http = require('http');

// http 协议,   1991 html 应答式
http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == '/newpage'){
        res.writeHead(200); // 不跳转 服务器成功处理了请求，但不需要返回任何实体内容
        res.end(`newpage`)
        return;
    }
    if(req.url == '/www.baidu.com'){
        res.writeHead(204); 
        return;
    }
    // http 头, 体
    // 响应头部
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // 七层模型 物理层 数据链路层 IP层 TCP层 应用层(...)
    res.write('hello world');
    res.end(`
    <html>
        <head></head>
        <body>
            <a href="www.baidu.com">百度</a>
            <a href="/newpage">新页面</a>
        </body>
    </html>
    `)
})
.listen(3000)