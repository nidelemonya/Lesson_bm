function reduce(arr,n) {
    return arr.reduce((sum,e,i) => {
        // 提供初始值为 []
        // console.log(e,i)
        if (i === 0) {
            return sum = e
        }
        if(i === n-1){
            return sum.concat(e.reverse())
        }
        else {
            return sum.concat(e[n-1])
        }
    },[]);
}
snail = function(array) {
    // enjoy
    let n = array.length
    return reduce(array,n)
}
console.log(snail([
    [1,2,3], 
    [4,5,6], 
    [7,8,9]]))
console.log(snail([
    [1, 2, 3, 4, 5, 6], 
    [20, 21, 22, 23, 24, 7], 
    [19, 32, 33, 34, 25, 8], 
    [18, 31, 36, 35, 26, 9], 
    [17, 30, 29, 28, 27, 10], 
    [16, 15, 14, 13, 12, 11]]))