/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};


var maxDepth = function (root) {
    return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


var maxDepth = function (root) {
    let len = 0;

    function deep(node) {
        if (!node) {
            return
        }
        if (node.left === null && node.right === null) {
            len++;
        }
        deep(node.left);
        deep(node.right);
    }
    deep(root);
    return len;
};