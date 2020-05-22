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
    // path = [];
    function preOrder(node, path) {
        if (!node) return;
        let val = node.val;
        console.log(path)
        path.push(val);
        // 叶子节点
        if (node.left === null && node.right === null) {
            if (path.reduce((a, b) => a + b, 0) === sum) {
                res.push(path);
                return;
            }
        }
        // .slice(0) 浅拷贝一份
        preOrder(node.left, path.slice(0));
        preOrder(node.right, path.slice(0));
    }
    //  root
    preOrder(root, []);
    return res;
}