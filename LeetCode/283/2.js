/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    nums.forEach((n) => {
        if (n === 0) {
            nums.splice(nums.findIndex(item => item === 0), 1); // 遍历数组 如果 元素等于0 找到第一个等于0 的元素的位置 删除
            nums.push(0);
        }
    })
    console.log(nums);
    return nums;
};
moveZeroes([1, 0, 2, 0, 5]);
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1]);
moveZeroes([0, 0, 1]);
moveZeroes([0, 1, 1]);
moveZeroes([1, 0, 0, 1]);
moveZeroes([1, 0, 0, 0, 1]);