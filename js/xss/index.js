const Koa = require('koa');
const KoaViews = require('koa-views');
const Router = require('koa-router');
const path = require('path') // 使用 绝对路径
const app = new Koa();

app.use(KoaViews(path.resolve(__dirname, './views'), {
    extension:'ejs'
})) // 从当前目录出发 加上相对路径 拼成绝对路径

// ejs 是个 模板引擎 
const router = Router();
let dataFromDB = `<iframe src='http://www.baidu.com'></iframe>` // 存储型
let map = {
    '<': '&lt;',
    '>': '&gt;',
}
function html_encode(s) {
    s = s.replace('<', '&lt;')
    s = s.replace('>', '&gt;')
    return s
}
function jsEncode(s) {
    var t = ''
    for (let char of s) {
        let c = char.charCodeAt(0).toString('16')
        c = '\\x' + c;
        t += c
    }
    return t
}
router.get('/', async (ctx) => {
    const { xss } = ctx.query
    await ctx.render('index', {
        username: 'lihua',
        xss: xss ? html_encode(xss) :'',
        dataFromDB:html_encode(dataFromDB),
        js: jsEncode(`"";alert(111);`)  // \x16进制
    })
})
app
.use(router.routes())
.use(router.allowedMethods())

app.listen(9090, () => {
    console.log('在9090端口启动成功')
})


// <%- username %>
// <%= username %>
// <% username %>