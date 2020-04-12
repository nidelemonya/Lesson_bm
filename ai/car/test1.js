// 爬楼梯问题

// function climbStairs(n) {
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2);
// }


// function climbStairs(n){ 
//     let arr= [];
//     arr[1]=1;
//     arr[2]=2;
//     for(let i=3;i<=n;i++){
//         arr[i]=arr[i-1]+arr[i-2];
//     }
//     return arr[n];
// }
// console.log(climbStairs(1) + '总走法');
// console.log(climbStairs(2) + '总走法');
// console.log(climbStairs(45) + '总走法');

// function climbStairs(n){
//     let prevOne = 2
//     let prevTwo = 3
//     let result = 0
//     if (n < 4) 
//     return n
//     for(let i = 4; i <= n ; i++) {
//         result  = prevOne + prevTwo
//         prevOne = prevTwo
//         prevTwo = result
//     }
//     return result;
// }
// console.log(climbStairs(65)+'总走法');


// var climbStairs = function(n) {
//     if (n <= 2) {
//         return n
//     }
//     let i1 = 1;
//     let i2 = 2;
//     let result = 0;
//     for(let i = 3; i <= n ; i++) {
//         result  = i1 + i2;
//         i1 = i2;
//         i2 = result;
//     }
//     return result;
// };



// 1 1 2 3 5 8 13 21 34
// 0 1 2 3 4 5  6  7  8 项
// fib(4) ???
// 1: 从前往后推导: 从 1 1 开始把后面每一项 推导出来
// 2: 从后往前推导
// 4：fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// fib(2) = fib(1) + fib(0) 已经知道答案了, 不需要求解, 结束条件
// fib(1) = fib(0) + fib(-1)
// 1: 结束的条件 2: 重复运用的逻辑
function fib(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    // 前两项之和
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(4));