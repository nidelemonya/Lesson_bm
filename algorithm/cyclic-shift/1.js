// 循环移位

// [1, 2, 3, 4, 5, 6, 7] k=3
// [7, 1, 2, 3, 4, 5, 6] k=1
// [6, 7, 1, 2, 3, 4, 5] k=2
// [5, 6, 7, 1, 2, 3, 4] k=3

// 模运算 取余

// list.splice(n - 1, 1); 方法返回一个数组
// function RShift(list, k) {
//     let n = list.length;
//     while (k > 0) {
//         list.unshift(...list.splice(n - 1, 1));
//         k--;
//     }
//     return list;
// }

// function RShift(list, k) {
//     const copy = [...list];
//     // console.log(copy);
//     const n = list.length;
//     if (k % n ===0) return;
//     for(let i = 0; i < n ;i++) {
//         // 时间复杂度 O(n)
//         // 空间复杂度 O(n)
//         list[i] = copy[[k + i] % n] // 左移
//         // [4, 2, 3, 4, 5, 6, 7]
//         // [4, 5, 3, 4, 5, 6, 7]
//         // [4, 5, 6, 4, 5, 6, 7]
//         // [4, 5, 6, 7, 5, 6, 7]
//         // [4, 5, 6, 7, 1, 2, 3]
//     }
//     return list;
// }


// 三次翻转法
// 1. [0, n-k-1]
// 2. [n-k, n-1]
// 3. [0, n-1]
function reverse(list, start, end) {
    let t = null;
    while(start < end) {
        t = list[start];
        list[start] = list[end];
        list[end] = t;
        start ++;
        end --;
    }
}

function RShift(list, k) {
    const n = list.length;
    if (k % n ===0) return;
    reverse(list, 0, n-k-1);
    reverse(list, n-k, n-1);
    reverse(list, 0, n-1);
    return list;
}

let arr = [1, 2, 3, 4, 5, 6, 7],
    k = 3;
console.log(RShift(arr, k));