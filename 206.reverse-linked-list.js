/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return head;
  let p = head;
  let prev = null;
  while (p.next) {
    let temp = p.next;
    p.next = prev;
    prev = p;
    p = temp;
  }
  p.next = prev;
  return p;
};
// @lc code=end
