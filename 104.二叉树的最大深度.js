/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  if (root == null) return 0;
  let maxDepth = 1;
  function traverse(root, depth) {
    if (root === null) return;
    maxDepth = Math.max(maxDepth, depth);
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  }
  traverse(root, maxDepth);
  return maxDepth;
};
// @lc code=end
