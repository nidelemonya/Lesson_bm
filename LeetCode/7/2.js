/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let val = Math.abs(x).toString().split("").reverse().join("");
    if(x < 0){
        return val <= Math.pow(2,31) ? -val : 0;
    }else{
        return val < Math.pow(2,31) ? val : 0;
    }
};
reverse(4564);