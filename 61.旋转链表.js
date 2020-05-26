/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function (head, k) {
  if (head === null) return null;
  if (head.next === null) return head;
  let cur = head;
  let n = 1;
  let i = 0;
  while (cur && cur.next) {
    cur = cur.next;
    n++;
  }
  cur.next = head;
  cur = head;
  while (i < n - (k % n) - 1) {
    cur = cur.next;
    i++;
  }
  head = cur.next;
  cur.next = null;
  return head;
};
// @lc code=end
