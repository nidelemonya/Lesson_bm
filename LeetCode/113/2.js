/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let res = [];

    function walk(node, path) {
        // 如果没有节点 返回
        if (!node) return
        let val = node.val
        path.push(val)
        if (node.left === null && node.right === null) {
            if (path.reduce((a, b) => a + b, 0) === sum) {
                res.push(path)
                return
            }
        }
        // path.slice(0) 对原数组进行深拷贝， 不影响原数组
        walk(node.left, path.slice(0))
        walk(node.right, path.slice(0))
    }
    walk(root, [])
    return res
};