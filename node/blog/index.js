const express = require('express');
const data = require('./db.json');
// koa 是 express 的子类
const app = express();
// get 请求谓语动词
app.get('/',function(req,res){
    // api 作用？ res.end(JSON.stringify(express))
    // Content-Type: application/json; charset=utf-8
    res.json(data);
})

// 设计一个URL， 访问第一首诗歌
// restful URL 暴露一个资源
// 一切皆资源 URL 资源的名词
// url + http 谓语动词 可以表达资源 对资源做什么操作
app.get('/posts/:id',function(req,res){
    // http://www.baidu.com/posts/:id?a=1
    // id
    // data.posts id
    // console.log(req.params.id);
    let id = req.params.id;
    let post = data.posts.filter(post => post.id == id);
    res.json(post);
})

// 设计一个URL, 添加一首诗歌 设计下URL + 动词
// post 用于新增
// json-server 快速实现json增删改查
app.post('/add/:id',function(req,res){
    let post = {
        "id": 3,
        "title": "蜀道难",
        "content": "噫吁嚱，危乎高哉！蜀道之难，难于上青天！蚕丛及鱼凫，开国何茫然！尔来四万八千岁，不与秦塞通人烟。西当太白有鸟道，可以横绝峨眉巅。地崩山摧壮士死，然后天梯石栈相钩连",
        "author": 1
    }
    data.posts.push(post);
    let id = req.params.id;
    let article = data.posts.filter(post => post.id == id);
    res.json(article);
})

app.listen(8080);