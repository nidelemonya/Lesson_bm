// const math = require('./math');
// console.log(math);

// 导入的同时完成了解构
const {
    add,
    minus
} = require('./math');

// 加法测试
// let result = add(3, 7);
// let expected = 10;
// if (result !== expected) {
//     throw new Error('3 + 7 = 10');
// }

// 减法测试
// let result1 = minus(3, 7);
// let expected1 = -4;
// if (result1 !== expected1) {
//     throw new Error('3 - 7 = -4');
// }

// 封装
function expect(result){
    return{
        toBe: function(value){
            if(result !== value){
                throw new Error('预期值和真实值不一样');
            }
        }
    }
}

// desc描述 fn逻辑
function test(desc,fn){
    // fn 有没有抛出错误
    // 有必要的时候 要多用 try catch
    try{
        fn();
        console.log(`√：${desc}通过`)
    }
    catch(err){
        console.log(`×：${desc}不通过`)
    }
    // try catch 捕获错误 对后面的代码不影响
    console.log(`测试完成`);
}
// 提示 欠缺, 没有足够的信息来提示我们
// expect(minus(3,7)).toBe(-4);
// expect(add(3,7)).toBe(10);
// jest
test('测试加法',()=>{
    expect(add(3,7)).toBe(10);
})
test('测试减法',()=>{
    expect(minus(3,7)).toBe(-4);
})