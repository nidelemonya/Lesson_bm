/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 321 = 123%10 12%10 1%10
    let ord = Math.abs(x);//把x的绝对值赋值给 ord 
    let val = 0;
    while(ord > 0){
        val = val * 10 + ord % 10;
        ord = Math.floor(ord / 10); // 返回小于等于ord / 10的最大整数:
    }
    if(x < 0){
        return val <= Math.pow(2,31) ? -val : 0;
    }else{
        return val < Math.pow(2,31) ? val : 0;
    }
};