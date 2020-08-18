/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;
    }
    digits.unshift(1);
    return digits;
}

console.log(plusOne([9]))
// console.log(plusOne([9]))
// console.log(plusOne([1,2,3])) // [1,2,4]
// console.log(plusOne([4,3,2,1])) // [4,3,2,2]
console.log(plusOne([4,3,2,9,9])) // [4,3,3,0,0]
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))