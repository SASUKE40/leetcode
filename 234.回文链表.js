/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let temp = null;
  let fast = head,
    slow = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    let t = head.next;
    head.next = temp;
    temp = head;
    head = t;
  }
  if (fast !== null) {
    slow = slow.next;
  }
  while (slow !== null) {
    if (slow.val !== temp.val) {
      return false;
    }
    slow = slow.next;
    temp = temp.next;
  }
  return true;
};
// @lc code=end
