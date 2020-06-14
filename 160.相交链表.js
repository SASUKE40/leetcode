/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let posA = headA;
  let posB = headB;
  while (posA || posB) {
    if (posA === posB) return posA;
    posA = posA ? posA.next : headB;
    posB = posB ? posB.next : headA;
  }
  return null;
};
// @lc code=end
