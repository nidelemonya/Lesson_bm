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
        // mid ** 2 等同于 mid = mid * mid
        let mid = low + ((high - low)>>1);
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