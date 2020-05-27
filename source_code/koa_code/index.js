// const Koa = require("koa"); //  koa class
// // 手写koa 模块化
// const app = new Koa();
// // http 服务
// // 源码
// // ctx 上下文环境
// app.use((ctx) => {
//   ctx.body = 'hello body';
// })

// app.listen(3000);


// 手写koa 模块化
const MyKoa = require("./lib/application"); 

const app = new MyKoa();
app.use((req,res)=>{
    res.end('hello world')
})

app.listen(3000,()=>{   // api
    console.log('在3000端口启动成功');
});