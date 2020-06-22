## js new
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
1. 创建一个空的简单JavaScript对象(即 {})；
2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
3. 将步骤1新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。


```js
    function Animal() {
    // this 修改成 empty1 this === empty1
     this.name = 'cat'  // empty1.name 全等
    };
    let empty1 = {}
    Animal.apply(empty1);
    console.log(empty1);
```


- 构造函数上面的属性是自己独有的
- prototype 上面的东西是共享的 (方法)
- prototype 只有普通函数才有的一个属性， 这个属性他是个对象
- __proto__ js继承：靠原型链串起来


### 通过调用new Foo()创建的每个对象将最终被[[Prototype]]链接到Foo.prototype