/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // es6 解构
    let [prev, curr] = [null, head];
    while (curr) {
        let tmp = curr.next; // 1. 修改前先记住下一个节点
        curr.next = prev; // 2. 改变指向，第一个节点prev是 null
        prev = curr; // 3. 记录前一个节点，供下次循环使用
        curr = tmp; // 4. cur通过temp指向下一个节点
    }
    return prev;
};