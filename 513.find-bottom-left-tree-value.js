/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let maxDepth = -1;
  let record;
  function traverse(node, depth) {
    if (node === null) return;
    if (depth > maxDepth) {
      record = node.val;
      maxDepth = depth;
    }
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
  traverse(root, 0);
  return record;
};
// @lc code=end
