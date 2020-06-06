## 块级元素布局规则
### 格式化上下文
上下文 ctx === context
跟token 一样是一个泛指的概念。
### BFC (block formatting context）块级格式化上下文
block containers that are not block boxes 下列情况：块容器不是块盒
- float
- absolute
- display : inline-blocks || table-cells || table-captions || flex
- overflow 不为 visible
- 根元素 html 默认会新建一个 BFC
都会新建立一个 BFC.
BFC 是一个隔离的容器

### BFC 规则
- 盒子在垂直方向上， 从上往下一个接着一个布局。
- 垂直方向上的距离由 margin 决定，同一个BFC之内，垂直方向上相邻的 block-level-box margin 会折叠， 经典 margin 塌陷 (边距折叠)
出现原因: 留白 -> 够了就行, 取较大边距。
- 由于有 float 元素， 一个盒子大小可能会缩小， 除非他新建一个BFC(overflow 清除浮动)
- w3c 上没有，自己总结的： BFC区域 不会和 float 折叠 (左侧固定， 右边自适应)

### float 原来做文字环绕的，后来用来做布局

### flex 布局
react-native 只支持 flex， RN 已经证明了 只用 flex 是可以很好的完成布局。