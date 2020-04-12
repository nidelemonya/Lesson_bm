## 类型

### 基本数据类型
动态类型

Null
Undefined
String
Number
Bool

## 复杂数据（引用）类型
Object 类型
 - array
 - function
 - object
 - reg(正则)
 - date

 `运行`时决定, 变量类型

~~~ js
var a = 123;
var b = [];
function c() {}
var d = {a:1,b:2} // 对象字面量
var e = /[0-0]/ //正则表达式
var f = Date.now()
~~~

## 定义变量的关键词
- var：es5

块级变量：
- let: 可变, 认为它是更完美的 var 推荐用let
- const: 常量 不可变

## ==
相等等操作符比较两个值是否相等,会进行类型转换

### ===

全等操作符比较两个值是否相等，不会进行类型转换







## 盒模型
- content-box 标准盒模型
width/height ：content 区域
- border-box 怪异盒模型 避免出现横向滚动条
width/height: border 及以内的区域
 - IE(window) w3c