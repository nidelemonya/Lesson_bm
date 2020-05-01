/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let max = Math.pow(2, 31)-1;
    let min = Math.pow(-2, 31);
    let flag = x > 0 ? '' : '-'
    let val = parseInt(flag+x.toString().split('').reverse().join(''));
    // let val = parseInt(flag+(x+'').split('').reverse().join(''));//(x+'') 把x变成字符串
    console.log(val);
    return (val >= min && val <=max ) ? val : 0;
};
reverse(-456778);