- 面试题想考查什么
- 去牛客网刷题
- 复盘很重要 复盘时间应该大于准备时间

1. css 属性名和值不区分大小写
    id className querySelector 敏感
    刷题目

2. 盒子模型
    margin
    - 行内元素：
        1. 当我们使用内外边距时，只有左右方向有效
        2. 设置四个方向的内边距时， 对于行内元素，确实显示出效果， 但是竖直方向的内边距只有效果，对其他元素3没有影响 
        3. 竖直方向 外边距没有效果
    - 块级元素
        1. 可以设置宽高
        2. 设置margin和padding都有效
        3. 可以自动换行
        4. 多个块状，默认排列从上到下

3. 怎么回答才完美
    - 自适应
    - flexible.js 老了
    - rem em
    - rem 一切可依赖 等比例关系 px2rem
    - 蓝湖 的 用法 设计师设计稿 宽度就是 750px
    - 但是手机多变 html font-size 宽度 会变化
    - media query
    - vw/vh 一切都是 100vw
    - vw 方案如何做适配？
    - 百分比
    - calc
    - postcss
    - 适配， 我还用过 vue/react + vw 实现
    - js babel
    - 工作流 webpack
    - webpack css .styl .scss -> css - loader stylus-loader stylus css 编译
    - postcss 全新的css 库， 平台 插件系统
    - babel-core autoprefixer(自动加前缀)
    - box-shadow
    - -webkit-box-shadow
    - cssnext(css variable)
    - vue 结构就像一块三明治 什么东西应该写在哪里都规定好了
    1. 移动适配
        vw
    2. postcss 强大
        - vue 内置了 postcss (.postcssrc.js)
        - px-to-vw
        - postcss-px-to-viewport 安装 (yarn add postcss-px-to-viewport)