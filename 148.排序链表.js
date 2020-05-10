/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  function mergeSort(node) {
    if (node === null || node.next === null) return node;
    let fast = (slow = node);
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let rightNode = slow.next;
    slow.next = null;
    let left = mergeSort(node);
    let right = mergeSort(rightNode);
    return merge(left, right);
  }
  function merge(left, right) {
    let dummy = new ListNode(0);
    let pre = dummy;
    while (left && right) {
      if (left.val < right.val) {
        pre.next = left;
        left = left.next;
      } else {
        pre.next = right;
        right = right.next;
      }
      pre = pre.next;
    }
    if (left === null) {
      pre.next = right;
    }
    if (right === null) {
      pre.next = left;
    }
    return dummy.next;
  }
  return mergeSort(head);
};
// @lc code=end
