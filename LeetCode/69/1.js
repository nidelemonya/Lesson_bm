/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 1) {
        return 1;
    }
    let low = 0;
    let high = x;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = mid * mid;
        let guess1 = (mid + 1) * (mid + 1);
        if (guess <= x && guess1 > x) {
            return mid;
        } else if (guess < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
};