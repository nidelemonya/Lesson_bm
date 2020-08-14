let arr = new Array(5);
// Math.ceil 向下取整
// 考察递归 Math.random
function insertRandom(n) {
    if (n < 0) return
    let rand = Math.ceil((Math.random() * 30) + 2)
    if (arr.includes(rand)) return insertRandom(n)
    arr[n] = rand
    return insertRandom(n - 1)
}
insertRandom(arr.length - 1)
console.log(arr)