/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for(let num of nums) {
        if(sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        // Math.max() 函数返回一组数中的最大值。
        // 这里是返回 res 和 sum 的最大值 赋值给 res
        res = Math.max(res, sum);
    }
    console.log(res);
    return res;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);