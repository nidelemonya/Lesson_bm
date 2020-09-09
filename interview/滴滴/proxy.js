// Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。
// 为什么叫 proxy
// let target = {}; //对象,代理
// let p = new Proxy(target, {}) // 代理
// p.a = 37;
// console.log(target)

// const p = new Proxy(target, handler)
// target 要使用 Proxy 包装的目标对象
// handler 一个通常以函数作为属性的对象
// var handler = {
//     get: function(target, name) {
//         return name in target ? target[name] : 37;
//     }
// }
// var p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;
// console.log(p.a, p.b)
// console.log('c' in p, p.c)

let validator = {
    set: function(obj, prop, value) {
        if (prop  === 'age') {
            if (!Number.isInteger(value)) {
                // throw new Error('The age is not an integer')
                return
            }
            if (value > 200) {
                // throw new RangeError('The age seems invalid')
                return
            }
        }
        obj[prop] = value;
        return true
    }
}

let person = new Proxy({}, validator);
person.age = 100;
person.name = 'nihao';
console.log(person.name, person.age)
person.age = 'young';
person.age = 300;
console.log(person.name, person.age)