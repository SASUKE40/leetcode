/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  while (head && head.next) {
    let firstNode = head;
    let secondNode = head.next;

    prev.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    prev = firstNode;
    head = firstNode.next;
  }
  return dummy.next;
};
// var swapPairs = function (head) {
//   if (!head || !head.next) return head;
//   let firstNode = head;
//   let secondNode = head.next;
//   firstNode.next = swapPairs(secondNode.next);
//   secondNode.next = firstNode;
//   return secondNode;
// };
// @lc code=end
