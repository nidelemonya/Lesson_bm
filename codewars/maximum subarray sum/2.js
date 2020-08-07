var maxSequence = function(arr){
    if (arr.length === 0) return 0
    let res = arr[0];
    let sum = 0;
    for(let a of arr) {
        if(sum > 0) {
            sum += a;
        } else {
            sum = a;
        }
        res = Math.max(res, sum);
    }
    return res > 0 ? res : 0;
}
console.log(maxSequence([3, 1, -3, 4, -1, 2, 1, -5, 4]))