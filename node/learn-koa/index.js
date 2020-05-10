// 轻量级的web 开发框架, js node 50%
// JavaScript
const Koa = require('koa'); // 引入KOA
const app = new Koa(); // Web Server
const fs = require('fs');
// 启动一个服务 函数封装一个服务
// const func = ctx =>{
//     console.log('func');
//     ctx.response.body = 'func';
// }
const main = async ctx => {
    // async 是“异步”的简写，
    // 而 await 可以认为是 async wait 的简写。所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
    // ctx 上下文环境
    // 
    // console.log(ctx.request,'--------');
    // ctx.response.body = "Hello CCTV"
    // req response
    // 设置响应的类型
    ctx.response.type = 'html'; // 响应头
    // 分层, 网站, 大一点的网站, 返回一个HTML文件(MVC View)
    // 设置响应的内容
    // 协议 操作系统(内存node 文件系统 D:) 网络 数据库

    // const html = fs.readFileSync('./template.html','utf-8');    // 同步的
    // console.log(html);
    // ctx.response.body =html;

    // 封装Promise 版本的 readFile
    let pReadFile = function (filePath) {
        return new Promise(function (resolve, reject) {
            fs.readFile(filePath, 'utf-8', function (err, data) {
                // 'utf-8' 设置编码格式 把 buffer 元素转换为字符串
                // 如果没有设置编码格式, 则需要加上toString()方法
                // console.log(data.toString(),'----------');
                // 存在异步问题,导致无法显示
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        })

    }
    await pReadFile('./template.html').then(data => {
        ctx.response.body = data;
    })

    // ctx.response.body = `
    // <html>
    //     <head></head>
    //     <body>
    //         <h1>Hello CCTV</h1>
    //     </body>
    // </html>
    // `
}
// app.use(func);
app.use(main); // 启用了一个服务 给访问者用 Visitors 使用
app.listen(3000);