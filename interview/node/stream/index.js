// 0x62 -> 十六进制
// js 在原声类型上缺少对二进制的支持 只有 number 类型
// 62 ASCII B
// 0x62 十六进制 用更底层的 Buffer 结构来存储 缓冲区
// 底层的语言
// node buffer

// const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]) // 为字符串 "buffer" 
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
// 哪个api， 可以让我们更好地理解他？
console.log(buf.toString());

console.log(Buffer.from('hello world'));
console.log(Buffer.from('hello world').toString());
console.log(Buffer.from('hello world').toJSON())


// 最关键的地方是什么？ 存储的本质 内存 物理单元
// 1. 字符串的每一位 去找他的 ASCII 值
// 2. map 0x +charCodeAt 字符串拼接
// 3. Buffer from
var array = 'hello world'.split('').map(function (str) {
    return '0x' + str.charCodeAt(0).toString(16)
});
console.log(array);
console.log(array.join());
console.log(array.join(' '));
const str = Buffer.from(array)
// 哪个api， 可以让我们更好地理解他？
console.log(str.toString());