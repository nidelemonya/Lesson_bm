const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{
        // 'Access-Control-Allow-Origin' 为 *   Access-Control-Allow-Credentials':true 就不能用，
        // 如果想多个网站使用cookie 我们最好用一个JSON  数组把他们收集起来.
        // origin
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers':'Content-Type', // 列出了哪些首部可以作为响应的一部分暴露给外部。
        'Access-Control-Allow-Origin':'http://127.0.0.1:8080', //响应头指定了该响应的资源是否被允许与给定的origin共享
        'Access-Control-Allow-Methods':'*', // * 也是可以的 允许任何
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With',
        'Access-Control-Max-Age':-1,// preflight预检请求结果缓存的时间  如果值为 -1，则表示禁用缓存，每一次请求都需要提供预检请求，即用OPTIONS请求进行检测。
        'Access-Control-Allow-Credentials':true // 表示是否可以将对请求的响应暴露给页面。返回true则可以，其他值均不可以。
        // 凭证 cookie, 允许前端请求携带 cookie
    })
    // cookie： 相当于 localstorage, cookie 随着请求头自动发送
    let posts = ['js','php'];
    res.end(JSON.stringify(posts));
})
.listen(9090,()=>{
    console.log('在9090端口启动成功');
});