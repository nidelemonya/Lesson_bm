/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num
    return num % 9 || 9
};
addDigits(489);