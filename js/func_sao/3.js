// 实现两数相加
/**
 * @return number
 * @param {*} a 
 * @param {*} b 
 */

function add(a, b) {
    if (arguments.length != 2) {
        throw new Error('参数个数有误');
        return;
    }
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error('参数类型有误')
        return;
    }
    return a + b;
}
console.log(add(1,'s'));