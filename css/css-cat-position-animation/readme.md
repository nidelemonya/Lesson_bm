父级盒子的背景图片会被子级盒子的背景图片所覆盖
设置 z-index 可以解决这个问题 但是要注意 它和transform:translate3d(-50%,-50%,0)会产生冲突从而导致z-index失效
z-index 是可以被继承的 所以说z-index 是子级继承父级，其和父级的z-index是一样的 所以要重新声明