/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1List = [];
  let l2List = [];
  while (l1) {
    l1List.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    l2List.push(l2.val);
    l2 = l2.next;
  }
  let head = null;
  let higherVal = 0;
  while (l1List.length || l2List.length) {
    let l1Val = l1List.pop() || 0;
    let l2Val = l2List.pop() || 0;
    let sum = l1Val + l2Val + higherVal;
    higherVal = (sum / 10) >> 0;
    let currVal = sum % 10;
    let node = new ListNode(currVal);
    node.next = head;
    head = node;
  }
  if (higherVal) {
    let node = new ListNode(higherVal);
    node.next = head;
    head = node;
  }
  return head;
};
// @lc code=end
