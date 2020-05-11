const https = require('https');
const fs = require('fs');
//不是流的话: 是一次性接收到所有的数据 一次性交给我们
https.get('https://movie.douban.com/top250', function (res) {
    // 分段返回 这个res 就是流
    console.log(res); // 继承了 流 可读流 提供数据的那一方 IncomingMessage 本质上还是流
    const writeStream = fs.createWriteStream('douban.html');
    res.pipe(writeStream);
});
https.get('https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.webp', function (res) {
    const writeStream = fs.createWriteStream('千与千寻.jpg');
    res.pipe(writeStream);
})
// 每个后台都存在流