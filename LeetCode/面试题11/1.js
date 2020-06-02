var minArray = function (numbers) {
    /*
        左闭右开类型
        [low,high)
    */
    let low = 0, high = numbers.length - 1, mid;
    while (low <= high) {
        // mid = low + Math.floor((high - low)/2);
        //右移一位，相当于除以2，但右移的运算速度更快
        //若使用(low+high)/2求中间位置容易溢出
        mid = low + ((high - low)>>1);
        //说明在arr2,
        if (numbers[mid] < numbers[high]) {
            high = mid;
        } //说明mid在arr1,
        else if (numbers[mid] > numbers[high]) {
            low = mid + 1;
        } else if (numbers[mid] == numbers[high]) {
            //如果low==high的话直接返回
            high = high-1;
        }
    }
    //low和high都在闭区间
    return numbers[low]
    //最后low = high+1的;,low>high

};