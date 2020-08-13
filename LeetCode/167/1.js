/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let other = target - numbers[i];
        let res = binarySearch(numbers, other);
        // res 找得到且不是它本身
        if (res != -1 && res != i) {
            // 返回下标值不是从零开始的 所以要加1 
            return i < res ? [i+1, res+1] : [res+1, i+1];
        }
    }

    function binarySearch(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let guess = numbers[mid];
            if (guess === target) {
                return mid;
            } else if (guess > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
};

// twoSum([2,7,9,11,15],9);