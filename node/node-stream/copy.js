const fs = require('fs');

// 不用流存在的问题
// 步骤：读完一个文件得到内容 info（变量放到我们计算机内存里面的） 再写到某个地方
// 是一次性读取 如果文件过大 很消耗内存

// function copy(sourceUrl, destUrl){
//     // 异步读取
//     fs.readFile(sourceUrl,(err,info)=>{
//         if(!err){
//             fs.writeFile(destUrl,info,(err)=>{
//                 if(!err){
//                     console.log('拷贝成功');
//                 }
//             })
//         }
//     })
// }

// 使用流  流： 基础类 Stream
// 可读流 可写流 转换流
function copy(sourceUrl, destUrl){
    // 读一点 写一点
    const readStream  = fs.createReadStream(sourceUrl);
    const writeStream = fs.createWriteStream(destUrl);
    readStream.pipe(writeStream);
    // pipe === | 管道操作符
}

// 区别
// 前端： baidu.com -> html,css,js 浏览器 -> 我看到内容
// 浏览器执行js, 浏览器也会申请内存 在各自的电脑上运行 天然就是分布式的 (集中)
// 高并发性

// 后端：baidu.com 1台服务器 (linux电脑)  处理很多人的请求
// 如果内存过多 服务器卡 所有人都会卡
copy('./readme.md','copy.md')