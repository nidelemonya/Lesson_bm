## 浮光掠影效果实现

- 实现思路

 1. 画一个竖直的长方形的白色div，设置opcity将其变为半透明

 2. 借助transform:skewX将长方形变成等高的平行四边形

 3. 白条div绝对定位，外层div相对定位，一开始left属性默认是0

 4. 在:hover伪元素中修改left值，例如left=600px（超出图片长度），通过transition指定left和时间，形成过渡