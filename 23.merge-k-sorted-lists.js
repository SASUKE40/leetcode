/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let vals = [];
  for (let list of lists) {
    while (list) {
      vals.push(list.val);
      list = list.next;
    }
  }
  vals.sort((a, b) => a - b);
  let mergeList = null;
  while (vals.length > 0) {
    let newNode = new ListNode(vals.pop());
    newNode.next = mergeList;
    mergeList = newNode;
  }
  return mergeList;
};
// @lc code=end
