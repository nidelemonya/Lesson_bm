(function () {
    'use strict';

    const add =  (a,b) => {
        return a + b
    };

    // 只用到了 add, 为了优化代码体积， 
    // 可以直接删除 divide
    // rollup (打包工具)
    console.log(add(1,2));

    // d.js 引入了 math.js 所以需要一个地方 引入 这个 d.js
    // 命令: npx rollup index.js --file output.js --format iife
    // 如果 d.js 不被其他地方用到(或者引入) 那么他就是一个没用的

}());
