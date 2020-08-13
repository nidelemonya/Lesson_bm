/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let res= [];
    let val = preorder[0];
    res.push(val);
    let left = inorder.slice(0, inorder.indexOf(val));
    let right = inorder.slice(inorder.indexOf(val)+1);
    console.log(left, right);
    return res;
};