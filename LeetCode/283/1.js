/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let length = nums.length;
    // let n = 0;
    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++)
            if (nums[j] === 0) {
                // console.log(nums, j);
                nums.splice(j, 1);
                nums.push(0);
                // console.log(nums);
            }
    }
    console.log(nums);
    return nums
};
moveZeroes([1, 0, 2, 0, 5]);
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1]);
moveZeroes([0, 0, 1]);
moveZeroes([0, 1, 1]);
moveZeroes([1, 0, 0, 1]);
moveZeroes([1, 0, 0, 0, 1]);