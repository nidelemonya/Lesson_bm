/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let i = 0,
        j = nums.length - 1;
    // 基准 -> index
    let index = partition(nums, i, j);
    // 判断基准值 是不是 第k大的位置
    // [8, 9, 7, -1, 5] k = 2 
    //partition: [5, -1, 7, 8, 9]
    // 0 1 2 3
    // 倒数： 第 k 大元素
    k = nums.length - k;
    while (index !== k) {
        if (index < k) {
            i = index + 1;
        } else {
            j = index - 1;
        }
        index = partition(nums, i, j);
    }
    return nums[index];
};
// 升序
function partition(nums, left, right) {
    // 如果左指针大于右指针 返回
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
    return left;
}