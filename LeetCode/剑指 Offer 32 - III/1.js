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
var levelOrder = function(root) {
    if (root === null) return [];
    let queue = [ root ];   // 队列
    let res = [];
    let n = 1;
    while (queue.length) {
        // 上一层的元素都出队列
        let rowNodes = queue.splice(0); // 把队列从0 开始删掉 并拷贝一份给rowNodes
        // 下一层的元素 需要拿到上一层的所有元素 遍历上一层所有元素 取出所有的 .left ,right 节点
        let arr = [];
        for (let node of rowNodes) {
            arr.push(node.val);
            // 假设既没有 left 又没有 right 已经到达二叉树最底下这层 即queue.length === 0 -> 终止条件
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            if( n % 2 === 0 ) arr.reverse();
        }
        n++;
        res.push(arr);
    }
    return res;
};