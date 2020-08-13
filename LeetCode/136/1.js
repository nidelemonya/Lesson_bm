/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 两个相等的数异或为 0；一个不为 0的数与 0 异或为这个数本身
   return nums.reduce((sum,e) => sum = sum ^ e);
};