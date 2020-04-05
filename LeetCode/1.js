// leetcode 考试 , 程序员能通过它的考试, 提高算法呢能力 
// 没问题 函数就是对一个功能进行封装 函数
//let a = 2; // 全局
//var twoSum; // 变量声明 他的类型是什么? 定义一个弱类型变量
//console.log(typeof twoSum);// undefined
//twoSum = null;// null
// console.log(typeof twoSum); // object
// 时间复杂度，  n*n = O(n^2)
// var twoSum = function (nums, target) {
//     let arr = [];//坐标放进去
//     for (let i = 0; i < nums.length; i++) { //暴力解法
//         // 循环一遍
//         for (let j = i + 1; j < nums.length; j++) { //内层循环
//             // == 代表相同， ===代表严格相同
//             if (nums[i] + nums[j] === target) {
//                 arr = [i, j];
//                 return arr;
//             }
//         }
//     }
// }

// console.log(a)

const twoSum = function(nums,target){
    // 两重循环,
    // target , 一重循环, nums[i], target-nums[i]
    // 一次就能找到? {}
    let map = {} //对象字面量
    //forEach 循环遍历数组 遍历数组中的每一个元素
    nums.forEach(function(e,i){
        // console.log(e,i);
        map[e] = i; // map[] []里面是变量即为key 这里把数组的值 赋给[]中的e
    })
    // map[2]=0 ,map[7]=1, map[11]=2, map[15]=3,
    // console.log(map);
    for (let i = 0; i < nums.length; i++){
    // let j = map[9 - nums[0]] --> j = map[7] = 1
        let j = map[target - nums[i]];
        if (j && j !== i) {
            return [i,j];
        }
    }
};
// twoSum = [0,1];
console.log(twoSum([2,7,11,15],9));
// 时间复杂度 n + n = 2n O(n)