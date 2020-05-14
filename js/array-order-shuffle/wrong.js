let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 没有达到真正的乱序   伪随机
console.log(arr.sort(() => Math.random() - 0.5));
// 这里改变了原来数组 对原来数组造成了影响
// 导致后面的乱序是根据前一次乱序后的数组进行乱序 而不是对原始数组进行乱序
console.log(arr);
// [5, 6, 4, 9, 3, 2, 1, 0, 7, 8]
// [3, 4, 1, 7, 0, 2, 8, 5, 6, 9]
// [3, 7, 9, 0, 5, 6, 2, 1, 4, 8]

// 如何验证是否是真正的随机
// => 让每个数在每个位置出现的几率相等
// 方法 乱序足够多的次数 求每个位置加起来的数的平均数 ~ 4.5
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}
let t = 10000;
for (let i = 0; i < t; i++) {
    // let sorted = shuffle(arr);
    // 对数组先进行浅拷贝
    let sorted = shuffle(arr.slice(0));
    for (let i = 0; i < sorted.length; i++) {
        res[i] = sorted[i] + res[i];
    }
}
console.log(res.map(sum => sum / t));

// a,b 表示正在进行比较的两个数

// a-b 小于 0 ，那么 a 会被排列到 b 之前
// a-b 等于 0 ， a 和 b 的相对位置不变
// a-b 大于 0 ， b 会被排列到 a 之前
console.log(arr.sort((a, b) => a - b)); // 升序
console.log(arr.sort((a, b) => b - a)); // 降序

function bubbleSort(arr) {  // 升序
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // sort 的回调函数 控制条件不成立
            // [0,1)
            // () => Math.random() - 0.5
            // 设置 两个数交换的概率为50%
            // 可能交换也可能不交换
            if (arr[j] > arr[j + 1]) {
                // 数组解构 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
bubbleSort(arr);
console.log(arr, 'bubbleSort');

// 原始：[0,1,2,3]
// 1 [1,0,2,3]
// 2 [1,2,0,3]
// 3 [1,2,3,0]

// 4 [2,1,3,0]
// 5 [2,3,1,0]
// 6 [3,2,1,0]