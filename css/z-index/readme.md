## z-index
我们的网页 是沿着一条 z 轴排开的 (ps 图层)
某些元素的渲染顺序是由其 z-index 的值影响的。这是因为这些元素具有能够使他们形成一个层叠上下文的特殊属性。

## 层叠上下文形成 z-index 调整的就是这个层叠上下文
- 文档中的层叠上下文由满足以下任意一个条件的元素形成
    1. position 不为 static
    2. filter 滤镜 transform perspective 不为 none
    3. will-change

## layers 层
共同点：都是 z-轴 顺序
transform: translate3d
will-change
video
backface-visibility 为 hidden
css3 里面的 animation 动画开始的时候

## 
js -> relayout -> repaint -> composite(合成) - GPU

## 提升 layers 的好处
- 当前这个layers 变化不会影响其他layers
- 对于transform、opacity 产生变化了，不会经过 relayout repaint 跳到 composite