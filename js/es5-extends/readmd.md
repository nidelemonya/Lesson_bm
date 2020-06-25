### 原型链继承
```js
    function Animal(){
        this.live = 'land';
        this.eat = [];
    }
    function Cat() {
        this.sound = 'miaomiao';
    }
    Cat.prototype = new Animal(); // 可以继承方法 但继承属性比较鸡肋
    console.log(c1, c1.live);
```

### 组合继承
#### 继承属性
```js
    function Dog() {
        Animal.call(this); // 继承属性的：父类有的属性，放到自己的内部属性上面
        this.sound = 'wangwang';
    }
    let d1 = new Dog(); 
    let d2 = new Dog(); 
    d1.eat.push('meat');
    d2.eat.push('bone');
    console.log(d1,d2)  
    // 子类构造里面
    // Animal.call(this)
```
#### 继承方法

#### 理解
```js
    function Animal() {
    this.live = 'land';
    this.eat = []
    }
    let obj = {}
    Animal.call(obj);
```