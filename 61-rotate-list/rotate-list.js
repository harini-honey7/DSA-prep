/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;   
    let len = 0, curr = head;

    while (curr) {
        curr = curr.next;
        len++;
    }

    k = k % len;
    if (k === 0) return head;               

    let s = head, f = head;
    for (let i = 0; i < k; i++) {
        f = f.next;
    }

    while (f.next) {
        s = s.next;
        f = f.next;
    }

    f.next = head;
    let newHead = s.next;
    s.next = null;
    return newHead;
};