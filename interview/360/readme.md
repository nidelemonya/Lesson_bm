奇虎360 周鸿祎
360风格, 重视基础, 10道题,
在线编程题

1. 请根据以下特效, 写出来。
面试技巧 分析

线上面试 打开了摄像头 vscode
- 做之前不要急, 分析清楚, 跟面试官总结下你的思路和做法
    - 渐变 radial-gradient
    - 鼠标跟随效果 mousemove
    - 用什么元素来做渐变元素    div 可以 优化一下?
    一个轻量级元素(标签) 用来做下效果增强, strong /i/b/em div+p

    答案是 伪元素 ::before


变量 ：root

x y 设置 --size ok?
position:'
js setProperty() getProperty()

特效? 吸引用户眼球, 按钮， 超过用户的需要再给予

- radial-gradient(shape size at position, start-color, ..., last-color);
- shape	确定圆的类型:
    - ellipse (默认): 指定椭圆形的径向渐变。
    - circle ：指定圆形的径向渐变
- size 定义渐变的大小，可能值：
    - farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角
    - closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边
    - closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角
    - farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边
- position 定义渐变的位置。可能值：
    - center（默认）：设置中间为径向渐变圆心的纵坐标值。
    - top：设置顶部为径向渐变圆心的纵坐标值。
    - bottom：设置底部为径向渐变圆心的纵坐标值。
    - start-color, ..., last-color：用于指定渐变的起止颜色。
