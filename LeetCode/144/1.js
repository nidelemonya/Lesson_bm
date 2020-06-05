/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 深度优先遍历
var preorderTraversal = function (root) {
    let arr = [];
    function helper(node) {
        if (node) {
            let val = node.val;
            arr.push(val);
            // 遇到 左子树了 也要 root left right 顺序
            helper(node.left);
            // 遇到 右子树了 也要 root left right 顺序
            helper(node.right);
        }
    }
    helper(root);
    return arr;
}