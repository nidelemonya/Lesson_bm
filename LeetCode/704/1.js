/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        // 向下取整
        // let mid = Math.floor((low + high) / 2);
        let mid = low + ((high - low)>>1);
        // 这样写防止溢出, 且 >> 右移一位, 相当于除以2, 比除法的/的运行效率高。
        // 因为 + 号运算符 优先级比 >> 高 所以后面要用括号括起来。
        // 位运算符，只对整型部分有效。
        // 由于有编译器优化，他们的效率应该是相同的（如果不存在编译器优化，移位运算更快）。
        let guess = nums[mid];
        if (guess == target) {
            return mid;
        } else if (guess < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};