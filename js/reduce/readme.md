# Array.prototype.reduce()
reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
- reducer 函数接收4个参数:
1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引)
4. Source Array (src) (源数组)
您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

## 参数
- callback
    执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
    1. accumulator
        累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
    2. currentValue
        数组中正在处理的元素。
    3. index 可选
        数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
    4. array可选
        调用reduce()的数组
    5. initialValue可选
        作为第一次调用 callback函数时的第一个参数的值。 **如果没有提供初始值，则将使用数组中的第一个元素。** 在没有初始值的空数组上调用 reduce 将报错。

回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。

### 注意：
如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。


## 手写reduce
1. 如果没有给 initial_val 那么数组的第一项直接变成initial_val；
    否则 initial_val 开始 + arr[0];
    argumrnts 类数组 -> 真正的数组 Array.form

### 手写代码方法
1. 理清原理
2. 从返回值入手，由结果向前推
3. 使用分布式写法
4. 多定义中间变量， 计算的本质