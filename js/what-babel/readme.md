babel 是用来将es6的代码转换为浏览器兼容的代码

import { zip } from 'loadsh'

import zip from 'loadsh/zip'

1. code -> reg 处理字符串(处理小段代码没问题 但对于大段的代码是不行的) -> code
2. code -> AST -> 树 CRUD(增加 读取 更新 删除) -> 另外一棵 AST -> 另外一份 code


HTML -> AST -> appendChild createElement -> 另外一棵 AST -> 渲染

我 今天 很 高兴
{
    person: '我',
    time: '今天'
}

js: 词法
js 代码由什么组成，引擎关心这方面的问题
- whiteSpace
- line 换行
- comment
- token
    - numberLiteral 数字字面量
    - stringLiteral 字符串字面量
    - 符号 [] {} ()
    - identify var c = b + 5

