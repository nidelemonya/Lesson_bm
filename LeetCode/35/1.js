/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let index;
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = nums[mid];
        if (guess === target) {
            index = mid;
            return index;
        } else if (guess > target) {
            high = mid - 1;
            index = mid;
        } else {
            low = mid + 1;
            index = low;
        }
    }
    return index;
};