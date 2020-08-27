JSX -> createElement -> 虚拟DOM(reacr element) -> 对应平台的渲染器 reactDOM/react-native 渲染

serState -> 生成另外一棵 虚拟 DOM -> dom diff(reconcilers) -> 找出哪些地方需要更新
-> 应用更新

## stack reconciler
## Fiber reconciler

之前 DOM diff 递归的过程： 我们遍历所有的节点，这个过程 js 执行时间是很长的，而且 js 计算和页面渲染， 绘制，是互斥的。

浏览器的一次event-loop / frame：

- task
- microtask
- requestAnimationFrame
- render
- requestIdleCallback 当这一帧有空闲时间的时候

之前 js 是老大，我想执行多久我就执行多久

现在 js 主动让步，我自己放在 requestIdleCallback 里面，js 和浏览器统一站在用户体验的角度， requestIdleCallback 也叫做合作调度。

主要目标：

- 能够把可中断的任务切片处理。
- 能够调整优先级，重置并复用任务。

fiber ：是一个数据结构

这个数据结构支持我们写出 可终止暂停重新启动的代码

```js
fiber: {
    child: 第一个子节点
    silbling：下一个兄弟
    return：父节点
}
```

fiber： 以单链表的形式表达一棵树

generate: yield

## 生命周期

Render 阶段： 算出哪些阶段需要更新

commit 阶段： 之前 Render 阶段已经 花费了很多时间， 为了让用户尽快的看到页面，所以这个阶段会一气呵成，更新页面。