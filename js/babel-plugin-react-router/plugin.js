// 使用抽象语法树 进行分析 https://astexplorer.net/
// 上次的是 包 @babel/core babel-types
const plugin = function({types: t}) {
    return {
        visitor: { // 返回的对象必须有 visitor 这个 属性
            ObjectProperty(path) {
                // 当前节点
                const node = path.node;
                if (node.key.name !== 'component') { // 只处理 component 节点
                    return;
                }
                // 创建一条 import 语句
                let source = node.value;
                // 当前模块唯一变量名
                const program = path.findParent((p) => p.isProgram())
                let local = program.scope.generateUidIdentifier(); // 给local(Identifier) 取个名字 考虑变量名唯一不冲突 
                let specifiers = [t.importDefaultSpecifier(local)]
                // import local, { useState } from 'XXX'
                let importStatement = t.importDeclaration(specifiers, source)

                // 插入 import
                program.node.body.unshift(importStatement)
                // 替换 component 这个 key 的值
                // component: './'
                node.value = local;
            }
        }
    }
}
module.exports = plugin