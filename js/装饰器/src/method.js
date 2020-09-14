// let obj = {}
// Object.defineProperty(obj, 'a', {
//     value: 1
// })

// 装饰器在作用于属性的时候，实际上是通过 Object.defineProperty 来进行扩展和封装的。

function log(target, key, descriptor) {
    console.log(descriptor)
    let originAdd = descriptor.value
    descriptor.value = function(...args) {
        console.log('start')
        let res = originAdd.apply(this, args);
        return res; // 恢复原来的行为
    }
}
class Math {
    constructor() {
        this.c = 10
    }
    // 非侵入的
    // add 有参数怎么办 有 this 怎么办？
    @log
    add (a,b) {
        // 不完美的
        // console.log('监听到了')
        // const sum = 'add'
        const sum = a + b + this.c
        return sum
    }
}

let m = new Math();
// add 不是原来的 add
// add 修饰过后的 add === descriptor.value
console.log(m.add.toString())
console.log(m.add(1, 2))
// 监听 add 这个方法是否被调用