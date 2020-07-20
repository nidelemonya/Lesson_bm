const express = require('express')

const app = express()
// Get 路由
app.get('/big.js',(req, res)=>{
    console.log('here')
    const fs = require('fs')
    const md5 = require('md5')
    const jsContent = fs.readFileSync('./big.js', 'utf-8')
    // 一堆 头部字段
    // content-type
    // 强缓存: 状态码 200, memory/disk cache 请求不会到达服务器
    // max-age 相对于服务器缓存时间 20s
    // Expires 明确 绝对时间  客户端时间可以设置
    // cache control 相对时间
    res.setHeader('Cache-Control','max-age=20')


    // 协商缓存： 请求会到达服务器
    // 20s 之后，请求 会携带一个 (If-None-Match 的字段) 到达服务器
    // If-None-Match: 浏览器发现 上一次请求 服务器 有 Etag 设置, 浏览器自动发送的。

    // etag 生成： MD5
    // if-modified-since: 文件修改了    ->  文件的最后修改会发生变化
    // 服务器 对比前后两次文件有没有变化 从时间角度考虑 存在缺陷
    const Etag = md5(jsContent)
    const oldEtag = req.headers['if-none-match']
    // console.log(oldEtag,Etag)
    // 服务器决策
    if(oldEtag === Etag){
        // 文件没有变化
        // 从缓存里面读取 304 (not modified)
        res.sendStatus(304).end('')
        return
    }
    res.setHeader('Etag',Etag) // 相当于给 js 文件打标签
    res.end(jsContent)
})

app.listen(9090, ()=> {
    console.log('在9090端口启动成功')
})