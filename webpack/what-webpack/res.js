// 立即执行函数，即声明就执行 这个 obj 就是 后面传的参数
(function(obj) {
    // 执行 每个文件里面的内容
    let module = {};
    function require(params) {
        console.log(params) // 拿到 ./math.js
        // module.exports 导出什么东西 拿到 ?
        obj[params](module, require); // 调用这个函数 把exports的内容 挂上去
        console.log(module)
        return module.exports
    }
    console.log(obj)
    obj['./index.js'](module, require);
})({
    './index.js': function (module, require) {
        // 从 math.js  引入
        // const sum = (a, b) => (a+b);
        const sum = require('./math.js')
        console.log(sum(10,20))
    },
    './math.js': function (module = {}, require) {
        module.exports = (a, b) => (a+b)
    }
})
// export xxx 会转换成  module.exports
// module.exports 如何在 浏览器上面运行的 ?
