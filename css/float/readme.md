伪类：  
    link 表示链接正常情况下（即页面加载完成时）显示的颜色
	hover:表示鼠标悬停时显示的颜色
	visited:链接被点击时显示的位置
	focus：元素获得光标焦点时的颜色
	active: 元素处于激活状态

	link -> visited -> hover -> focus -> active

### 确定包含块
确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

1. 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）的内容区的边缘组成，也可能会建立格式化上下文(比如说 a table container, flex container, grid container, 或者是 the block container 自身)。
2. 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成。
3. 如果 position 属性是 fixed，在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)。
4. 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
A transform or perspective value other than none
A will-change value of transform or perspective
A filter  value other than none or a will-change value of filter(only works on Firefox).
A contain value of paint (例如: contain: paint;)