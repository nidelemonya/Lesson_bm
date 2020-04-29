/**
 * @param {number} num
 * @return {number}
 */
// 使用递归可以解决 但这里不符合题意
var addDigits = function (num) {
    if (num < 10) return num
    else {
       let  arr= [...num.toString()];
       let sum = 0;
        console.log(arr);
        arr.forEach(function(i){
            sum +=parseInt(i);
        })
        console.log(sum);
        addDigits(sum);
    }
};
addDigits(78979);