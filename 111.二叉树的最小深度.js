/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let min_depth = Infinity;
  if (root.left) {
    min_depth = Math.min(minDepth(root.left), min_depth);
  }
  if (root.right) {
    min_depth = Math.min(minDepth(root.right), min_depth);
  }
  return min_depth + 1;
};
// @lc code=end
