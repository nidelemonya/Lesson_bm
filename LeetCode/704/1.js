/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        // 向下取整
        let mid = Math.floor((low + high) / 2);
        let guess = nums[mid];
        if (guess == target) {
            return mid;
        } else if (guess < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};