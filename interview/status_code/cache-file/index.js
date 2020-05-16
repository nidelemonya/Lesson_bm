const http = require('http');
const fs = require('fs');
// 1. 如果文件没有改变， 有必要一直打开文件, 返回吗？
http.createServer((req,res)=>{
    // res.end();
    // 浪费网络资源的地方？
    // 200成功, 返回内容
    // 1. 前端会缓存数据, localStorage sessionStorage
    // 2. a.txt 请求一次 就可以
    // 3. 之后再请求, 如果服务器端文件没有发生改变, 
    // 就不用返回文件内容, 直接使用前端缓存的数据
    // 1. 怎么样区分第一次请求和其他次请求
    // 2. 怎么样判断文件是否修改
    // 3. 如何告诉浏览器, 直接使用缓存的数据

    // console.log(req);
    let stat = fs.statSync('./a.txt');  // 同步, 阻塞
    // console.log(stat.mtime);
    if( req.headers['if-modified-since']){
        console.log(typeof req.headers['if-modified-since']);
        if(req.headers['if-modified-since'] == stat.mtime){
            console.log(typeof stat.mtime);
            res.statusCode = 304;
            res.end();
            return;
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.end('修改了');
            return;
        }
    }
    res.setHeader('Last-Modified',stat.mtime) // 响应头
    // 作用: 下次再请求时, 客户端会带上 if-modefied-since 字段
    fs.createReadStream('a.txt').pipe(res);
})
.listen(5050);