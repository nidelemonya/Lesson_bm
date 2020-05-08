{
    /* <div id="root">
      <span class="demo">
        This is a span.
      </span>
      <p>DOM</p>
    </div> */
}

// 如果是伪元素 不需要写 因为伪元素在css中声明
// DOM 树  AST TREE    Abstract
// Abstract 业务 逻辑
// 算法 递归

let dom = {
    tag: 'div',
    attrs: {
        id: 'root',
        className: 'wrap'
    },
    children: [{
            tag: 'span',
            attrs: {
                className: 'demo'
            },
            children: [
                // 文本 This is a span.
                // 公平
                // createTextNode()
                // createElement()
                {
                    tag: undefined,
                    text: 'This is a span.'
                }
            ]
        },
        {
            tag: 'p',
            children: [{
                tag: undefined,
                text: 'DOM'
            }]
        },
    ]
}