const babel = require('@babel/core')
const t = require('babel-types')
const code = `import { zip } from 'lodash'`;
import { zip } from 'lodash'
// js 代码: 1.module 2. 脚本

// import zip from 'lodash/zip'; // importDefaultSpecifier 默认导入
// import zip as XX from XX // importNamespaceSpecifier 取别名的导入

const plugin = { // 插件 针对特定的语法做特定的事
    ImportDeclaration(path) { // path AST import 的节点
        // import sepcifiers 节点 from source 节点
        // import React, {useState} from 'react
        // componentDidMount() { XXX }
        // load() {}
        // .js(字符串) -> 状态机(词法分析) -> 语法分析() -> AST
        if (!t.isImportDefaultSpecifier(path.node.specifiers[0])) { // 如果不是默认导入的
            console.log(path.node.specifiers[0].imported.name)
            console.log(path.node.source.value)
            let indetify = t.identifier('zip')
            let descs = [t.importDefaultSpecifier(indetify)]
            let str = t.stringLiteral('lodash/zip')

            let importStatement = t.importDeclaration(descs, str)
            path.replaceWithMultiple([importStatement])
        }
    }
}

const res = babel.transform(code, {
    plugins: [{
        visitor: plugin
    }]
})
console.log(res)