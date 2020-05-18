const http = require('http');
const fs = require('fs');
const users = require('./users.json');
const version = 4;
// const version = 4;  users.json 修改后, 版本号+1
let server = http.createServer((req, res) => {
    // console.log(req.url);
    // If-None-Match
    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        });
        fs.createReadStream('./index.html').pipe(res);  // 输出html文件
    } else if (req.url == '/users') { // ajax 数据接口
        // 如果存在版本号，且客户端版本与服务器版本一致
        if (req.headers['if-none-match'] && Number(req.headers['if-none-match']) == version) {
            // console.log(Number(req.headers['if-none-match']) == version);
            res.statusCode = 304; //没有改变版本， 不返回内容, 告诉客户端使用本地缓存
            res.end();
            return;
        } else {
            res.setHeader('Etag', version);
            res.writeHead(200, {
                'Content-Type': 'text/json;charset=utf-8'
            });// 发送200状态码
            // fs.createReadStream('./users.json').pipe(res);
            res.end(JSON.stringify({ // 返回数据和版本号
                version,
                users
            }));
            // send 文本 Buffer
            // JSON.stringify() 把JSON 类型 变成文本
            // console.log(JSON.stringify(users));
        }
    }


    // if(req.headers['if-none-match']){
    //     console.log(Number(req.headers['if-none-match']) == version);
    //     if(Number(req.headers['if-none-match']) == version){
    //         res.statusCode = 304;   //没有改变版本
    //         res.end();
    //         return;
    //     }
    //     else{
    //         res.setHeader('Etag',version);
    //         res.end('hello world2');
    //         return;
    //     }
    // }
    // res.setHeader('Etag','12345678')
    // res.end('hello world');
});

server.listen(5000);