/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const middleNode = (head) => {
    let slow = (fast = head);
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };
  const mergeList = (l1, l2) => {
    let l1Tmp;
    let l2Tmp;
    while (l1 !== null && l2 !== null) {
      l1Tmp = l1.next;
      l2Tmp = l2.next;

      l1.next = l2;
      l1 = l1Tmp;

      l2.next = l1;
      l2 = l2Tmp;
    }
  };
  if (head === null) {
    return null;
  }
  let mid = middleNode(head);
  let l1 = head;
  let l2 = mid.next;
  mid.next = null;
  l2 = reverseList(l2);
  mergeList(l1, l2);
};
// @lc code=end
