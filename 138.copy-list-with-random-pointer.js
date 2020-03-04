138.copy-list-with-random-pointer
/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) return head;
  let map = new Map();
  let p = head;
  // node copy to map
  while (p !== null) {
    map.set(p, new Node(p.val));
    p = p.next;
  }
  // assign in loop
  p = head;
  while (p !== null) {
    map.get(p).next = map.get(p.next) || null;
    map.get(p).random = map.get(p.random) || null;
    p = p.next;
  }
  return map.get(head);
};
// @lc code=end
