// call, apply 同一类
// bind: 调用函数 除了绑定 this 之外, 还可以让我们分批传递参数
function sum(a,b,c){
    return a + b + c;
}
// call apply 参数必须传完整
sum.call(null,1,10,20);
// bind 传的参数可以不完整
// sum abc 达不到要求？ 会返回一个函数, 让我们接着传递剩下的参数
let add1 = sum.bind(null,1,10);
// 所以可以接着调用 add1 这个函数 继续传参
let res = add1(20);
console.log(res);

// 正则表达式匹配字符串
function test(reg, str){
    return reg.test(str);
}
let str = `
`
let str1 = `123`,str2 = `
456
`, str3 = `789`, str4 = '\n0000';
// `` 模板字符串 功能强大 输入过的内容都能帮你保留下来
// 标识正则表达式 中间是表达式的内容
let whiteSpace = /\n/g;
// \n n: new line
// \t t: tab
// g global 全局匹配
console.log(test(whiteSpace,str));
console.log(test(whiteSpace,str1));
console.log(test(whiteSpace,str2));
console.log(test(whiteSpace,str3));
console.log(test(whiteSpace,str4));
// test: 测试一下 某个字符串存不存在回车
// 每次 都带着 whiteSpace
let hasWhiteSpace = test.bind(null,whiteSpace);
console.log(hasWhiteSpace(str4));
console.log(hasWhiteSpace(str3));
console.log(hasWhiteSpace(str1));

// 语义化不同表达式
let hasTabSpace = test.bind(null,/\t/g);
console.log(hasTabSpace('\t123'))
let hasNumber = test.bind(null,/[0-9]/g);
console.log(hasNumber('ABC123'));