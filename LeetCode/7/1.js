/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let arr = [...x.toString()];
    let n = arr.length;
    // console.log(arr);
    if (arr[0] === '-') {
        let sign = arr.shift();
        let brr = sign + parseInt(arr.reverse().join(''));
        console.log(parseInt(brr));
        let val = parseInt(brr);
        return -val <= Math.pow(2,31) ? val : 0;
    } else {
        let brr = arr.reverse();
        console.log(parseInt(brr.join('')));
        let val = parseInt(brr.join(''));
        return val < Math.pow(2,31) ? val : 0;
    }
};
// reverse(123);
// reverse(-123);
// reverse(1230);
reverse(-2147483646);