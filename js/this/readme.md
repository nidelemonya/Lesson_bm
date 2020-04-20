## this
**运行时**决定的，跟定义时无关
```js
function foo(){
    this.a + b;
}
foo
```
- 1:不加任何修饰，用()调用,默认 this 指向了 window
- 2:用call()调用,第一个参数是我们指定函数调用时 需要的 this  往后的参数 就是 foo 调用时需要的形参
- 3:用apply()调用,往后的参数 就是 foo 调用时需要的形参， 但是 不是一个个参数展开放在后面，要用数组包起来


- 对象， 调用指向对象
```js
 var obj1 = {
    a: 1,
    say: function() {
      console.log(this.a);
    }
  }
  obj1.say()
```