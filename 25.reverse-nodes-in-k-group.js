/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return null;
  let tail = head;
  for (let i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }
  let next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
};

function reverse(curr) {
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
// @lc code=end
