/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    let queue = [ root ];   
    let res = [];
    while (queue.length) {
        // 上一层的元素都出队列
        let rowNodes = queue.splice(0); // 把队列从0 开始删掉 并拷贝一份给rowNodes
        let arr = []
        for (let node of rowNodes) {
            arr.push(node.val);
            // 假设既没有 left 又没有 right 已经到达二叉树最底下这层 即queue.length === 0 -> 终止条件
            if (node.children) {
                for (let child of node.children )
                queue.push(child);
            }
        }
        res.push(arr);
    }
    return res;
};