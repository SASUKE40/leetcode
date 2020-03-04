/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  helper(root, null);
};
function helper(root, prev) {
  if (root === null) return prev;
  prev = helper(root.right, prev);
  prev = helper(root.left, prev);
  root.right = prev;
  root.left = null;
  prev = root;
  return prev;
}
// @lc code=end
