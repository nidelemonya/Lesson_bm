const css = require('css');
let htmlStr = `
<html>
    <head></head>
    <body class="parent">
        <img src="src"/>
        <span></span>
        <div class="cls" id="myid"></div>
    </body>
</html>`
let cssStr = `
.parent .cls {
    font-size: 16px;
}
#myid {
    background-color: red;
}`
let rules = css.parse(cssStr).stylesheet.rules;
// console.log(JSON.stringify(rules, null, 2));

let currentAttribute = null;
let currentToken = null;
let stack = [{
    type: 'document',
    children: []
}]
parse(htmlStr);

function match(selector, ele) {
    if (!selector || !ele.attributes){
        return false;
    }
    //  #myid
    // {name：id, value: 'myid‘}
    if (selector.charAt(0) === "#"){
        let idAttr = ele.attributes.find(e => e.name === 'id');
        if (idAttr && idAttr.value === selector.replace('#','')) return true;
    }else if (selector.charAt(0) === "."){
        let classAttr = ele.attributes.find(e => e.name === 'class');
        if (classAttr && classAttr.value === selector.replace('.','')) return true;
    }else{
        if (ele.tagName === selector) return true;
    }
    return false;
}

function computerCss(ele) {
    // 计算 符合这个 ele 的所有 css 规则， css 规则 应用到这个节点上面
    // 1：靠 ele 属性 父节点， 和 css 里面 选择器 匹配
    // 2：如何匹配？ 浏览器： 从后往前匹配 提高效率 
    let elements = stack.slice(0).reverse;  // 浅复制一份来并翻转
    if (!ele.computerStyle) ele.computerStyle = {}
    for (let rule of rules){
        let selector = rule.selectors[0].split(' ').reverse();
        // console.log('selector',selector);
        // 最后一项匹配上了
        if (!match(selector[0], ele)){
            // 跳过本轮循环， 往后的步骤
            continue;
        }
        // 看父级满不满足
        //  先翻转 然后从后往前遍历匹配
        // [{type: 'doc'}, {html}, [header]]
        // [#id .parent #parentID span]
        let j = 1;
        for (let i = 0; i < elements.length; i++) {
            if (match(selector[j],elements[i])) j++;
        }
        // 匹配
        if (j >= selector.length) {
            // rule rule css 规则添加到 ele
            for (let delecare of rule.declarations){
                const { property, value } = delecare;
                ele.computerStyle[property] = value;
            }
        }
    }
}
console.log(JSON.stringify(stack[0], null, 2)); // 序列化加两个空格
function emit(token) {
    // console.log(token);
    // 拿到栈顶元素
    let top = stack[stack.length - 1];
    if (token.type === 'startTag') {
        // push pop 处理配对
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }
        // 知道 attributes, 知道栈 stack 里面的元素是 element 的父节点。计算 css 
        computerCss(element); // 明确知道 element 的父节点
        stack.push(element);
        // 作为栈顶元素的子节点， 为了生成树
        // if (!top.children) top.children = [];
        // 引用地址 都会更新
        top.children.push(element);
    } else if (token.type === 'endTag') {
        if (token.tagName !== top.tagName) {
            throw new Error('tagName match error');
        } else {
            stack.pop();
        }
    } else if (token.type === 'selfCloseToken') {
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }
        top.children.push(element);
    }
    currentToken = null;
}

function parse(htmlString) {
    state = start;
    for (let c of htmlString) {
        state = state(c);
    }
}

function start(c) {
    if (c === '<') {
        return tagOpen;
    } else {
        return start;
    }
}

function tagOpen(c) {
    // <html>: html tag 由a-z, A-Z 组成 
    // </html>
    // h t m l
    if (c === '/') {
        return endTageOpen;
    }
    // ^ 起点 $ 终点
    else if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'startTag',
            tagName: c
        }
        return tagName;
    }
}

function tagName(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        // 拼接
        currentToken.tagName += c;
        return tagName;
    } else if (c.match(/[\t\n\f ]/)) {
        return beforeAttributeName;
    } else if (c === '>') {
        // tag 拼接结束
        emit(currentToken);
        return start;
    }
}

function beforeAttributeName(c) {
    if (c === '/') {
        // 自闭合
        currentToken.type = 'selfCloseToken';
        return tagName;
    } else if (c.match(/^[a-zA-Z]$/)) {
        currentAttribute = {
            name: c,
            value: ''
        }
        return attributeName;
    }else if (c.match(/[\t\n\f ]/)){
        // 喻导空格消耗掉 不做任何处理
        return beforeAttributeName;
    }else if (c === '>') {
        return tagName(c);
    }
}

function attributeName(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        currentAttribute.name += c;
        return attributeName;
    }else if (c === '=') {
        return attributeValue;
    }
}

function attributeValue(c){
    // <div class="cls" id="myid"></div>
    // 如果遇到了双引号 自身调用自身 消耗掉这个双引号
    if (c === '\"') {
        // nothing
        return attributeValue;
    }
    else if (c.match(/^[a-zA-Z]$/)) {
        currentAttribute.value += c;
        return attributeValue;
    }
    else {
        // 要么是空格 要么是大于号 >
        // 消耗了这两个字符
        if (!currentToken.attributes) currentToken.attributes = [];
        currentToken.attributes.push(currentAttribute);
        currentAttribute = null;
        // 加 () 代理
        // 在本状态内部处理完毕了这个字符c， 下一个状态也要针对这个字符 c 处理
        return beforeAttributeName(c);
        // 不加 ()
        // 在本状态内部处理完毕了这个字符c， 下一个状态处理到的字符就是 c 的后一个字符。
        // return beforeAttributeName;
    }
}

function endTageOpen(c) {
    // </html>
    if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'endTag',
            tagName: c
        }
        return tagName;
    }
}