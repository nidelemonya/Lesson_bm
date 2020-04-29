// 请求 url - > html（信息）  -> 解析html
const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
// 请求 top250
// 浏览器输入一个 url, get
https.get('https://movie.douban.com/top250', function (res) {
    // 作编码处理
    // res.setEncoding()
    // console.log(res);
    // 分段返回的 自己做一个拼接的工作
    let html = '';
    // 有数据产生的时候
    // 流:水管里面的 水
    res.on('data', function (chunk) {
        // chunk 桶
        html += chunk;
    })
    // 当水接完的时候 做的事情
    res.on('end', function () {
        // 拼接完成
        // console.log(html);
        // 字符串 html
        const $ = cheerio.load(html);
        // 选中 25 个 li
        // document.querySelector
        // li 下面的 item
        // 
        let allFilms = [];
        $('li .item').each(function () {
            // this 循环时当前这个电影
            //  当前这个电影下面的title
            // this.querySelector
            // this 指向 循环时的每一个 item
            // $('.title') 整个 html 里面查找 .title
            // 加了 this 就是在当前 item 下面查找 提高效率
            const title = $('.title', this).text(); // 获取title 下面的文本内容
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src'); //获取src 这个属性
            // 存到自己的 数据库中
            // 存成一个 json 文件 fs
            // console.log(title,star,pic);
            allFilms.push({
                title,
                star,
                pic
            })
        })
        // 读文件 fs.readFile 文件内容读出来 index.html -> <html>...</html>
        // 写文件 index.html -> 把 <html>...</html> 写入
        fs.writeFile('./films.json', JSON.stringify(allFilms), function (err) {
            if (!err) {
                console.log('文件写入完毕');
            }
        });
        // 把图片下载下来
        downloadImage(allFilms);
    })
})

function downloadImage(allFilms) {
    for (let i = 0; i < allFilms.length; i++) {
        const pucUrl = allFilms[i].pic;
        // 下载
        // 页面 url === html(普通文本 utf-8) 浏览器帮你渲染了
        // 图片 url === 图片内容(binary 二进制编码) 浏览器也帮你渲染了
        // xx.png 双击打开一个图片
        // 发出请求 -> 拿到内容
        // fs.writeFile('./xx.png','内容') 
        https.get(pucUrl, function (res) {
            res.setEncoding('binary'); //改为二进制编码
            let str = '';
            res.on('data', function (chunk) {
                str += chunk;
            })
            res.on('end', function () {
                // 回调函数位置放到最后一个
                // 回调函数 第一个参数 基本都是 err 对象
                // 1.png 再往 1.png 写入一次
                fs.writeFile(`./images/${i}.png`, str, 'binary', function (err) {
                    // 没有错误 就是 null(空)
                    // console.log(err);
                    if (!err) {
                        console.log(`第${i}张图片下载成功`);
                    }
                })
            })
        })
    }
}