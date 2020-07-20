// 散列、哈希
// MD5加密： 可以将任意长度的内容 加密为固定长度的密文
const md5 = require('md5')
// 同样的输入 同样的输出
console.log(md5('abc'))
console.log(md5('abc'))
// 如果两次 md5的结果一样 => 两次原始的未加密的内容也是一样的
// => 两次 md5(big,js) 对比一下
// 协商: 缓存？新的内容
// 服务器判断是否可以缓存， 要先知道内容有没有发生变化
console.log(md5('abcdefg'))