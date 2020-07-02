var arr= [1,2,3,4];
// reduce 可以快速获取它的值之和
// arr.map filter
// 1. 可读性 代码风格
// 链式调用
var sum = arr.reduce(function(pre, cur, index, arr){
    console.log(pre, cur, index);
    return pre + cur;
}, 0);

console.log(sum);