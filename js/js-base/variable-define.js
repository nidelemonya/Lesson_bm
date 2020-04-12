// var 没有块级变量
// 块: 独立的块
// if (){} 块
// function (){} 块


// 如果有块级变量 => a 只在 {} 生效
{
    // var a=123;
    // let b=456;
    // b = function(){};
    // console.log(b);
    // const d = true;
    // d = false;
    const PI = 3.1415926;
}
// console.log(a); // 说明var没有块级变量
// console.log(b); // 说明let有块级变量
// es5 缺陷 没有块级变量
