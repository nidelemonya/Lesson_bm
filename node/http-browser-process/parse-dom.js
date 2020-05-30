let htmlStr = `
<html>
    <head></head>
    <body>
        <img />
        <span></span>
        <div></div>
    </body>
</html>`
// KMP 正则表达式 原理都是 FSM
// 缺陷：正则表达式 split(): 必须接收到完整的 HTML，
// token: html tag
let currentToken = null;
/**
[
    { type:'document', children:[
        { type:'startTag', tagName:"html", chidren:[
            { type:'startTag', tagName:"head", chidren:[]}
        ]}
    ] }，
    { type:'startTag', tagName:"html"， chidren:[] } ,
    { type:'startTag', tagName:"haed", chidren:[]}
]
 */
let stack = [{ type:'document', children:[] }]
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2)); // 序列化加两个空格
function emit(token) {
    console.log(token);
    // 拿到栈顶元素
    let top = stack[stack.length - 1];
    if (token.type === 'startTag'){
        // push pop 处理配对
        let element = {
            type:'element',
            children:[],
            attributes:[],
            tagName: token.tagName
        }
        stack.push(element);
        // 作为栈顶元素的子节点， 为了生成树
        // if (!top.children) top.children = [];
        // 引用地址 都会更新
        top.children.push(element);
    }
    else if (token.type === 'endTag'){
        if(token.tagName !== top.tagName) {
            throw new Error('tagName match error');
        }
        else {
            stack.pop();
        }
    }
    else if(token.type === 'selfCloseToken'){
        let element = {
            type:'element',
            children:[],
            attributes:[],
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
    if(c.match(/^[a-zA-Z]$/)){
        // 拼接
        currentToken.tagName +=c;
        return tagName;
    }
    else if (c.match(/[\t\n\f ]/)){
        return beforeAttributeName;
    }
    else if (c === '>'){
        // tag 拼接结束
        emit(currentToken);
        return start;
    }
}

function beforeAttributeName(c){
    if ( c === '/'){
        // 自闭合
        currentToken.type = 'selfCloseToken';
        return tagName;
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