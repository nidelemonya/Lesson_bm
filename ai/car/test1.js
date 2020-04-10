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


function climbStairs(n){ 
    let arr= [];
    arr[1]=1;
    arr[2]=2;
    for(let i=3;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n];
}
console.log(climbStairs(1) + '总走法');
console.log(climbStairs(2) + '总走法');
console.log(climbStairs(45) + '总走法');

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