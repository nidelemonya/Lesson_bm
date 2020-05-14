- DOM document  文档就是网页, js 内存里, 文档对象模型
    js -> html 转化
    DOM JS 数据结构tree appendChild 组成一棵树
    ul > li > textnode
    document.createElement('tag')   标签节点
    document.createTextNode('flex') 文本节点

    哪怕是文字 都是节点, 都是对象
    前端基本由js, html, css 构成, js 是王者, js 可以操控 html, css, 这些API 就叫做 DOM API
- 昨天讲得是API
 document.createElement('div');
 document.appendChild()
 document.createTextNode()  不要 面向 API 编程

- 面向业务编程
 this.state.liked true/false html 更新
 1. 分布
    动态的将 like button 添加到页面上
    likeButton 是一个class 方便复用
    既要用 html 来快速完成 DOM, 又要添加事件
    1. 要 dom 节点对象
    2. innerHTML
 2. js this 指向 你不知道的JavaScript this
    this 动态决定, 在每个函数里都有 this 
    this 是个指针
    具体指向谁 由调用方式决定
    1. 作为对象的方法调用, this 指向 对象本身
    2. 作为事件函数, this 指向事件发生的元素
        bind 可以强行去绑定函数内部的this 指向 返回一个函数
        call 立即执行
 3. 封装 class 复用,
    constructor 申明属性 this.state.
    render() 渲染到页面上
    changLikeText()
```js
    class LikeButton {
        constructor(){

        }
        render(){

        }
        changeLikeText(){

        }
    }
```
createDOMFromString 要写到外面?
代码思维的顶级,
createDOMFromString 不该属于 LikeButton类, 它应该是一个独立的,
util 方法, 是一个工具, 通用方法