/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
var getIntersectionNode = function(headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let pA = headA;
  let pB = headB;
  // calculate the length of linked list
  while (pA) {
    lenA++;
    pA = pA.next;
  }
  while (pB) {
    lenB++;
    pB = pB.next;
  }
  let lenDiff = Math.abs(lenA - lenB);

  // restart
  pA = headA;
  pB = headB;
  while (lenDiff > 0) {
    if (lenA > lenB) {
      pA = pA.next;
    } else {
      pB = pB.next;
    }
    lenDiff--;
  }

  // find node ref
  while (pA && pB) {
    if (pA === pB) {
      return pA;
    }
    pA = pA.next;
    pB = pB.next;
  }
  return null;
};
// @lc code=end
