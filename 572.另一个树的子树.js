/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  function traverse(s, t) {
    if (s === null && t === null) return true;
    if (s === null || t === null) return false;
    if (s.val !== t.val) return false;
    return traverse(s.left, t.left) && traverse(s.right, t.right);
  }
  if (t === null) return true;
  if (s === null) return false;
  return traverse(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};
// @lc code=end
