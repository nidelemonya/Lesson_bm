// 源端口号 目的地端口号
const net = require('net');
// 客户端： http.get xhr
// const client = net.createConnection({port:8088,host:'127.0.0.1'},()=>{
//     let json = JSON.stringify({a:1});
//     // cr 回车
//     // lf 换行
//     client.write('POST / HTTP/1.1\r\n');
//     client.write('HOST: 127.0.0.1\r\n');
//     client.write('Content-Type: application/json\r\n');
//     client.write('\r\n');
//     client.write(json);
//     client.write('\r\n');
// })
// client.on('data',(data)=>{
//     console.log('receive:', data.toString());
//     client.end();
// })
// // 传输完毕, 断开连接
// client.on('end',()=>{
//     console.log('disconnect')
// })

// 自己封装
class Xmlhttprequest {
    constructor(){
        this.method = null;
        this.url = null;
        this.headers = null;
        this.body = null;
        this.resStatusLine = null;
        this.statusCode = null;
        this.resHeaders = null;
        this.response = null;
    }
    open(method, url){
        this.method = method;
        this.url = url
    }
    setHeader(headers){
        this.headers = headers;
    }
    parse(string){
        const lines = string.split('\r\n');
        console.log(lines);
        this.resStatusLine = lines[0];
        this.statusCode = this.resStatusLine.split(' ')[1];
        // 截取 左闭右开
        this.resHeaders = lines.slice(1,lines.length-2);
        this.response = lines[lines.length -1];
    }
    send(body){
        // 浏览器 发http请求 -> 拼接 http 报文
        this.body = body;
        // Content-Length 正确获取Content 长度
        const client = net.createConnection({port:8088,host:'127.0.0.1'},()=>{
            client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: ${this.headers}\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`);
            // 代表数据已经发完了
            client.end();
        })
        client.on('data',(chunk)=>{
            // 服务端返回给 浏览器的 也是一个原始的 http 报文 buffer流
            // 解析报文
            // console.log('receive:', chunk.toString());
            console.log('receive:', JSON.stringify(chunk.toString()));
            this.parse(chunk.toString());
            this.onload();
        })
        client.on('end',()=>{
            console.log('disconnect');
        })
    }
}
// ajax
const xhr = new Xmlhttprequest();
xhr.open("POST","/");
xhr.setHeader({
    'Content-Type': 'application/json'
})
xhr.send(JSON.stringify({a:1}));
// 回调函数： 数据加载回来 才会调用
xhr.onload = function(){
    console.log('接收到响应了')
    console.log(xhr.statusCode);
    console.log(xhr.response);
    console.log(xhr.resHeaders);
}