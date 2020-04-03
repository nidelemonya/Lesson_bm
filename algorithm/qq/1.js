// 类型
// 1. number 数值型 整数 浮点数 都是number类型 没有区别
let arr = [];
let nums = '631758924';    // js 单双引号没区别
// console.log(typeof nums);   // typeof 运算符
arr.push(nums[0]);
let c = nums[1];
nums =nums.substring(2);    //slice
nums += c;
console.log(nums, arr);
// 1.第一位删除
// 2.第二位移到最后
// var arr=nums.match(/./g); 数组快速转换为字符串
// console.log(arr);
