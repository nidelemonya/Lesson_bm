// 导入 node http 模块(处理网络)
const http = require('http'); // 引用 http 模块
// 导入 fs fileSystem 文件系统 处理文件读写
const fs = require('fs'); // 引用 fs(文件系统) 模块
// 1：前端 ajax 传输数据给后端, 后端接收前端数据
// 2：响应数据给前端
// baidu.com  ->  一段html -> 浏览器拿到html 渲染成了页面 ->
// MIME
// text/html
// http://127.0.0.1:8081 => 把 ajax.html 内容返回给前端
const server = http.createServer(function(req,res){
    // 你想获取 前端给我的东西 就去req 上面拿
    // 我要给前端的东西 我就把他放到 res 上面
    console.log('当前正在请求',req.url);
    if(req.url.includes('search')){
        // search 搜索功能
        //  /     首页功能
        // .split() 切割字符串
        // res.end(req.url.split('?')[1])
        res.end(`["song1","song2"]`);
        return;
    }
    res.writeHead(200,{ // 设置内容类型
        'Content-Type': 'text/html;charset=utf-8' 
    })
    const file = fs.readFileSync('./ajax1.html',{encoding:'utf8'})
    // res.end('<h2>hello world 东华理工</h2>');
    // console.log(file);
    res.end(file);
})
// server 有可能失败 这里的函数用来提示 server 是否启动成功
server.listen(8081,function(){ // 占用一个闲置的8081端口
    console.log('server is running http:127.0.0.1:8081')
}) 