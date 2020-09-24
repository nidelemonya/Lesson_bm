// 两个时间字符串的比较
const timeCompare = (time1, time2) => {
    let t1 = time1.split(':');
    let t2 = time2.split(':');
    // 12:30:30
    // 12:30
    let len = Math.max(t1.length, t2.length);
    for (let i = 0; i < len; i ++) {
        //以长度更长的为循环条件
        //少一位的补0
        let num1 = t1[i] ? parseInt(t1[i]) : 0;
        let num2 = t2[i] ? parseInt(t2[i]) : 0;
        if(num1 > num2) {
            return 1;
        }
        else if(num1 < num2) {
            return -1;
        }
    }
    return 0;
}
// [].sort()
let arr = [5,1,2,3,4]
// arr.sort((a,b) => {
//     if (a>b) {
//         return 1
//     }
//     else if (a < b) {
//         return -1
//     }
//     else {
//         return 0
//     }
// })
arr.sort((a,b) => a - b)
console.log(arr)

let times = ["14:30:30", "14:30:29", "14:29:29"]
times.sort(timeCompare)
console.log(times)
