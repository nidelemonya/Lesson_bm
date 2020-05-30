## req
浏览器： xhr fetch
node： http.get()

不同api发出请求 -> http -> 一样

http： 超文本传输
- 调用xhr
- 浏览器拼接报文
    http1.1报文(纯文本)：
    - 首行\r\n
    - 首部\r\n
    - \r\n
    - 实体\r\n

限制： 必须拿到一个完整的报文
现实： 报文传输，可以允许我们， 分段传输

## 解析
有限状态机
FSM(finate, state, machine)
Infinity 正无穷 负无穷

浏览器解析报文：body(html), headers. 响应行
HTML怎么渲染出来了？ 浏览器也要解析html。
js 怎么就被执行了？ 浏览器也要解析 js

解析成什么？ 解析成词
分词 即 词法分析

## 编译原理
代码都是字符串
- 词法分析 （分词）：代码切割成一个个最小的单位
- 语法分析 栈，LL, LR
- 生成中间代码
- 生成目标代码

语文:
我今天很高兴
->我
今天
很
高兴
const net = require( 'net'); -> const net = require 'net'
```js
function cal(str) {}
Letstr='34+567-890'
```
1.34+567-890

语法:
```js
{
    person:'me',
    time:'now',
    do: 'what'
}
```
### 利用栈构造DOM树
1. 遇到开始标签入栈，同时把这个标签最作为栈顶元素的字节点。
2. 遇到结束标签就 出栈。