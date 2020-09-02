module.exports = function(source) {
    console.log(source)
    // md -> html
    return `
    import Markdown from 'markdown-to-jsx';
    import React from 'react';
    export default function Post() {
        return React.createElement(Markdown, {}, \`${source}\`)
    }
    `
    // 加 `` 转成字符串 因为里面嵌套 需要转义 
}