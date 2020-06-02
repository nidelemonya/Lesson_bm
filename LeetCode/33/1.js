/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] === target) {
            return mid;
        } 
        // [8,9,0,1,2,3,4,5,6]
        // [4,5,6,7,8,9,0,1,2]
        if (nums[mid] < nums[left]) {
            //  mid 在右边有序部分
            if (target >= nums[mid] && nums[right] >= target) { // target 在右侧有序区间
                left = mid + 1;
            } else {                                            // target 在左侧区间
                right = mid - 1;
            }
        } else {
            //  mid 在左边有序部分
            if (target <= nums[mid] && nums[left] <= target) { // target 在左侧有序区间
                right = mid - 1;
            } else {                                           // target 在右侧区间
                left = mid + 1;
            }
        }
    }
    return -1;
};
