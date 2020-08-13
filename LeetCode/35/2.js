/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index,
        low = 0,
        high = nums.length - 1
    while (low <= high) {
        let mid = low + ((high - low)>>1)
        let guess = nums[mid]
        if(guess === target) {
            index = mid 
            return index
        }
        if(guess < target) {
            low = mid + 1
            index = low
        }
        if(guess > target){
            high = mid - 1
            index = mid
        }
    }
    return index
};
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))