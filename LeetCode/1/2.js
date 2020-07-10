/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums.forEach((e,i) =>{
        if(nums.includes(target - e) && nums.indexOf(target - e) !== i ){
            res = [nums.indexOf(target - e),i]
        }
    })
    return res
};

console.log(twoSum([3,3],6));
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,4,8,6,0,32,16],38));