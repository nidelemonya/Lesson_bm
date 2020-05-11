// req 也是一个流
const http = require('http');
const fs = require('fs');
const request = require('request');

request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'));
http.createServer((req, res) => {
    // juejin.com/serch?type=all&query=js
    // GET
    // 后端会接收 type=all&query=js
    // 前端 会把(type=all&query=js) 当做流的方式传过来 后端
    // console.log(req);

    // 头部: content-type

    // GET: 数据放到 url 传输
    // POST: 数据放到 body 传输

    // http://localhost:8080/?type=all&query=js

    const writeStream = fs.createWriteStream('./params.txt');
    // postman 以post 提交过来的数据 保存到params.txt 
    req.pipe(writeStream);
    res.end('ok');
    })
    .listen(8080, () => {
        console.log('8080');
    })