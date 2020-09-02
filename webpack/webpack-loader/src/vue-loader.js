const { DomHandler } = require('domhandler');
const htmlparser2 = require('htmlparser2');
// const fs = require('fs')
module.exports = function (source) {
    return new Promise((resolve, reject) => {
        const handle = new DomHandler((err, dom) => {
            if (err) {
                reject(err)
            }
            else {
                console.log(dom)
                // fs.writeFileSync('./dom.json',JSON.stringify(dom, null, 2)) // 有环 不能写
                // 
                function visit(parentNode) {
                    let children = []
                    function help(children) {
                        if (!children) return ''
                        return children.map((child) => {
                            if (child.type === 'text') return `\`${child.data}\``;
                            return `React.createElement("${child.name}",{},${help(child.children).join(',')})`
                        })
                    }
                    children = help(parentNode.children)
                    return `React.createElement("${parentNode.name}",{},${children.join(',')})`
                }
                resolve(`
                import React from 'react'
                export default function Component(params) {
                    return ${visit(dom[0].children.find(e => e.type === 'tag'))}
                }
                `)
            }
        })
        const parse = new htmlparser2.Parser(handle);
        parse.write(source);
        parse.end();
    })
}