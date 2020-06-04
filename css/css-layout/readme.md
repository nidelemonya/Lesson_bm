## normal flow 
行内元素 (inline-level-box): 水平方向从左往右一个接着一个布局, 垂直方向默认会以 baseLine (基线) 对齐(baseline是小写字母x下面的一条线。)
块级元素(block-level-box) : 垂直方向从上往下一个接着一个布局
relative 定位: 占据着 normal flow 自己的空间

## baseline
inline 没有任何文字的时候。baseLine 在底部，img 以 baseline (把行撑高了).

## position 定位
absolute: 父级第一个非static (x) -> 不严谨的, 相对于它的 containing block (包含块)来定位 -> 找到它的包含块
fixed: viewport (x) 相对于视窗 -> 不严谨的
https://www.W3.org/

fixed
- 元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport （视窗））的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。

## containing block
许多盒子的位置和大小是根据一个称为包含块的矩形盒子的边缘计算的。 
一个元素的包含块：containing block 箱子, 箱子装着元素, 箱子里面的元素放到哪里, 大小？
首先先确定包含块的位置大小。

```css
width: 100%;  // 父级(x)， 现在来看这种说法是错误的， 并不是相对于父级来计算。
height: 100%; 
padding
margin
值是百分比的， 都是相当于包含块来计算的。
```

## 确定 containing block
确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

1. 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）的内容区的边缘组成，也可能会建立格式化上下文(比如说 a table container, flex container, grid container, 或者是 the block container 自身)。
2. 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成。
3. 如果 position 属性是 fixed，在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)。
4. 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
    - transform / perspective 不是 none
    - will-change 是 transform， perspective
    - filter 不是 none 或者 will-change 是 filter(only works on Firefox).
    - contain 是 paint (例如: contain: paint;)

## css ；