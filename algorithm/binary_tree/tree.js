// 深度优先遍历：前序(root, left, right)、 中序( left, root, right)、后序(left, right, root)
// 广度优先遍历：
let tree = {
    val:'F',
    left:{
        val:'C',
        left:{
            val:'A',
        },
        right:{
            val:'D',
        },
    },
    right:{
        val:'E'
    }
}
console.log(tree.left.val);