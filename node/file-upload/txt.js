const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
        // toLowerCase() 转小写
        if (req.url === '/files' && req.method.toLowerCase() === 'post') {
            // 处理文件
            parseFile(req, res);
        } else {
            fs.createReadStream('./index.html').pipe(res);
        }
    })
    .listen(8080, () => {
        console.log('在8080端口启动成功');
    })

function parseFile(req, res) {
    let body = '';
    let boundary = req.headers['content-type'].split('boundary=')[1];
    // console.log(boundary);
    req.on('data', (chunk) => {
        body += chunk;
    })
    req.on('end', () => {
        let lists = body.split('--' + boundary);
        for (let list of lists) {
            // 文件上传
            let fileName = '';
            let parts = list.split('\r\n');
            // console.log(parts);
            if (parts[1] && parts[1].includes('filename=')) {
                let startIndex = parts[1].indexOf('filename=');
                fileName = parts[1].substring(startIndex);
                // fileName = fileName.split('=')[1].replace("",'').replace("",'');
                fileName = fileName.split('=')[1].replace(/\"/g, '');
                // console.log('fileName:',fileName);
                // 一定要是上传文件 才有 parts[4]的内容
                fs.writeFile(`./${fileName}`, parts[4], {
                    encoding: 'utf-8'
                }, (err) => {
                    if (!err) {
                        res.end('ok');
                        // console.log('上传成功！');
                    } else {
                        res.end(err.toString());
                    }
                })
            }
        }
    })
}