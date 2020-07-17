/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  function maxGain(node) {
    if (!node) return 0;
    let leftGain = Math.max(maxGain(node.left), 0);
    let rightGain = Math.max(maxGain(node.right), 0);
    let priceNewpath = node.val + leftGain + rightGain;
    maxSum = Math.max(maxSum, priceNewpath);
    return node.val + Math.max(leftGain, rightGain);
  }
  maxGain(root);
  return maxSum;
};
// @lc code=end
