/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = nums.length - 1;
    while (i >= 0) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
        i--
    }
    // console.log(nums);
};
moveZeroes([1, 0, 2, 0, 5]);
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1]);
moveZeroes([0, 0, 1]);
moveZeroes([0, 1, 1]);
moveZeroes([1, 0, 0, 1]);
moveZeroes([1, 0, 0, 0, 1]);