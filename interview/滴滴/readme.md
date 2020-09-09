# 滴滴 面试复盘
- css 考什么？
    display block/inline/inline-block/table/table-cell/
    grid/flex/none
    BFC 闭包
    position 居中
    transform
    伪元素
    BEM 命名规范
    padding-top 做法
- css 正方形
    难点： 不定宽， 如何让高 跟着改变
    1. planA vw/vh
    2. planB paddingTop
    3. planC rem
    4. planD 伪元素

- 响应式编程的核心是什么？
    data-binding 数据绑定
    {a:1, b:2} 发布者 1:n template {a} 订阅者
    get set
    react/vue 响应式
    - 设计模式
    - Object.defineProperty vue 2.0
        Proxy
        Object.observer

- MVVM 手写 ？
    1. Object.defineProperty
        数据劫持API vue 2.0 中 如何
        不用了？
    2. 订阅发布者模式
        实例化 一个订阅者
        更新 this.innerHTML?
    3. 模板编译

- diff 算法

80-100
60分只需要2-3个晚上， 牛客网刷题， 分享的面试题
80 2道题 MVVM 手写 ES6 API + 订阅发布者模式
diff 算法
100 数据结构 + 动态规划