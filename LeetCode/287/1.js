/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;    // 数组项的范围 1 到 n
    // [1, n]
    // [1, 3, 4, 2, 2] 2
    while (left < right) {
        let count = 0;
        let mid = left + ((right - left) >> 1);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) count++; // 统计小于等于mid的个数
        }
        if (count > mid) {  // 重复数落在 [1, mid]
            right = mid;    
        } else {
            left = mid + 1; // 重复数落在 [mid+1, n]
        }
    }
    return left;
};