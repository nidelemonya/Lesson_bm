/**
 * @param {number[]} nums
 * @return {number[]}
 */
function partition(nums, left, right) {
    // 如果左指针大于右指针 返回
    if (left >= right) return;
    let i = left;
    let j = right;
    // 基准值选择数组的第一个元素
    let provit = nums[left];
    // 如果是最左边为基准的话，那就得右指针先开始找
    // 如果是最右边为基准的话，那就得左指针先开始找
    while (left < right) {
        // 右指针找到比基准值小的数 换到前面去
        // 左指针找到比基准值大的数 换到后面去
        // left 和 right 指针互相换 
        // right 指针 替换 left 位置
        // left 替换 right 位置

        // 1. 右边扫描, 比基准值小的数, 如果这个数比基准值大, 一直往前走
        while (left < right && nums[right] >= provit) {
            right--;
        }
        nums[left] = nums[right];
        // 2. 左边扫描, 比基准值大的数, 如果这个数比基准值小, 一直往后走
        while (left < right && nums[left] <= provit) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = provit;
    // 取到基准值位置 区分左右区间
    // return left;
    partition(nums, i, left - 1);
    partition(nums, left + 1, j);
}
var sortArray = function(nums) {
    partition(nums, 0, nums.length - 1)
    return nums;
};