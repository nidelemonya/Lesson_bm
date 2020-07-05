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
        let tmp = curr.next; // 1. 临时存储当前指针后续内容
        curr.next = prev; // 2. 反转链表
        prev = curr; // 3. 接收反转结果
        curr = tmp; // 4. 接回临时存储的后续内容
    }
    return prev;
};