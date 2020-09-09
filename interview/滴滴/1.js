let obj = {_a: '1', _b: {_c: 2}, _d: [1,2,3]}
// 深拷贝
// 数据在更新的时候, 通知一下模板
// obj.a obj.a = 2
Object.defineProperty(obj, 'a', {   // 数据劫持， 
  get: function() {
    console.log('get value')
    return this._a
  },
  set: function(value) {
    console.log('change value')
    // 未来通知template 更新
    this._a = value
  }
})

console.log(obj.a)
// obj.a
obj.a = '2'
console.log(obj.a)

// let obj = {
//     _hello:'hello world' //表示私有变量
// };
 
// Object.defineProperty(obj,'hello',{
//     get() {
//         console.log('get');
//         return this._hello;
//     },
//     set:function (value) {
//         console.log('set');
//         this._hello = value;
//     }
// });

// console.log(obj.hello)
// obj._hello = 'haha'