/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((right + left)/2);
        if(nums[mid] === target){
            return mid;
        }
        // 在左区间递增
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]){    //target在左侧区间
                right = mid - 1;
            }else{                                              //target在右侧区间
                left = mid + 1;
            }
        }else{ //在右区间递增
            if(nums[mid] <= target && target <= nums[right]){    //target在右侧区间
                left = mid + 1;
            }else{                                               //target在左侧区间
                right = mid - 1;
            }
        }
    }
    return -1
};