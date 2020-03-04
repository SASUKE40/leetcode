/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function(root) {
  let max = -Infinity;
  function helper(node) {
    if (node === null) return 0;
    let left = Math.max(0, helper(node.left));
    let right = Math.max(0, helper(node.right));
    max = Math.max(left + right + node.val, max);
    return Math.max(left, right) + node.val;
  }
  helper(root);
  return max;
};

// @lc code=end
