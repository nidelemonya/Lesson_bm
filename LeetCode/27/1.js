/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.includes(val)) {
        nums.forEach((e, i) => {
            if (e === val) {
                // console.log(e)
                nums.splice(i, 1)
            }
        })
        removeElement(nums,val)
    }
    return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))