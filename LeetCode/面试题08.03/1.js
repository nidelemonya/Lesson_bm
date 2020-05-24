/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
    function helper(left, right) {
        if (left > right) {
            return -1;
        }
        let mid = Math.floor((left+right)/2);
        if (nums[mid] === mid) {
            let res1 = mid;
            let res2 = helper(left, right - 1);
            if (res2 === -1) {
                return res1;
            } else {
                return res2;
            }
        } else if (nums[mid] > mid) {
            let res1 = helper(left, mid - 1);
            if (res1 != -1) {
                return res1;
            }
            return helper(nums[mid], right);
        } else if (nums[mid] < mid) {
            let res1 = helper(left, nums[mid]);
            if (res1 != -1) {
                return res1;
            }
            return helper(mid + 1, right);
        }
    };
    return helper(0, nums.length - 1);
};