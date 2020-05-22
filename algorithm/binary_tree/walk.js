// 深度优先遍历 前序(root, left, right)
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
// 递归 函数调用栈  递归都可以转换为循环
// 迭代就是循环 stack


// 没有辅助函数

// var preorderTraversal = function(root) {
//     let res = [];
//      if (root) {
//        res.push(root.val);
//        res = res.concat(preorderTraversal(root.left));
//        res = res.concat(preorderTraversal(root.right));
//      }
//      return res;
//   };