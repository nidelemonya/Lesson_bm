// 两个数 比较的时候 100% 交换
// 洗牌算法
// 从后往前 取一个数 a
// 从 未洗牌的 区间之内随机出一个数 b
// a  b 交换
// a 完成了
// 从后往前 重复
function shuffle(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        // -i 从后面
        // 从前面随机取一个数的下标
        // Math.floor(x) 返回小于等于x的最大整数 向下取整
        let idx = Math.floor(Math.random() * (len - i));
        [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]];
    }
    return arr;
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// console.log(shuffle(arr));

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