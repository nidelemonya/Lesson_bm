// 长方形面积的函数
/**
 * @return number
 * @param {*} w 
 * @param {*} h 
 */
function area(w, h) { // es55
    console.log(w, h) // undefined
    // 两个参数
    if (arguments.length < 2) {
        console.error('参数不够');
        throw new Error('请传递w,h两个参数') // 抛出错误 终止代码执行
        return;
    }
    if (typeof w != 'number' || typeof h != 'number') {
        throw new Error('参数类型有误');
        return;
    }
    return w * h;
}
console.log(area(1.3,5));
// var area = function(w,h){ // 匿名函数
// }

// let getArea = (w,h) => w*h; // es6

// 有什么问题
// console.log(area(1.19,3.458));