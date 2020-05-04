// 服务器
const http =require('http');
const fs= require('fs');
// request
// response
const server = http.createServer(function(req,res){
    // https://www.baidu.com/   => /
    // https://www.baidu.com/s?wd=sw => /s
    // req.url 判断用户进的是哪一个url
    // GET 参数 放到 url
    // POST 参数 放到 实体
    if(req.url ==='/'){
        // html
        const html = fs.readFileSync('./index.html','utf8')    //同步的方式进行读文件
        // const html = fs.readFile    //异步的方式进行读文件
        res.end(html);
        // 表明后端返回的内容的类型
        // 200 指 http 状态码
        // 1xx
        // 2xx: 200 成功
        // 3xx：301 暂时重定向  302 永久重定向
        // 4xx：401 未认证 404 找不到 客户端
        // 5xx：500 服务端出问题
        // res.writeHead(200,{
        //     'Content-Type': 'text/html;charset=utf-8' //设置内容类型 为 html文档
        // })
        // res.end(`<h2>123</h2>`);
    }
    else if(req.url === '/getPosts'){
        // 没有返回
        // 
        let posts = [
            {title:'js', star:1000},
            {title:'php', star:3000}
        ]
        let str = '';
        // 我们去向 => douban.com 要数据 douban.com 给我们response
        // 前端 xhr.send() => 我们, 接收 前端的 req
        // 分段得到每段数据 并拼接起来
        req.on('data',function(chunk){
            str += chunk;
        })
        // 接收完毕 str 组装完成
        req.on('end',function(){
            // 'Content-Type','application/json'
            console.log(JSON.parse(str));
        })
        // req res 都是流
        res.end(JSON.stringify(posts));
        // end 方法只能返回字符串;
        // 前端提交数据 解析

    }
    // console.log(req,req.url);
    // res.end('hello server');
})
server.listen(8080,function(){
    console.log('server is running 8080');
})