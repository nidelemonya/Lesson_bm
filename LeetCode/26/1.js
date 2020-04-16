/**
 * @author zzh
 * @date 2020.4.14
 * @function 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
    let val = nums[0];
    for (let i = 1; i < nums.length;) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            val = nums[i ++];
        }
    }
    return nums.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));