/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // 深度优先遍历
    let res = [];
    function deep(node, depth) {
        if (!node) return
        res[depth] = res[depth] || [] // res[depth] 有没有 有 用之前的，没有 设置一个新的[]
        res[depth].push(node.val)
        deep(node.left, depth +1)
        deep(node.right, depth +1)
    }
    deep(root, 0);
    return res.reverse();
};