/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function helper(node, low, high) {
    if (node === null) return true;
    if (low !== null && node.val <= low) return false;
    if (high !== null && node.val >= high) return false;
    if (!helper(node.left, low, node.val)) return false;
    if (!helper(node.right, node.val, high)) return false;
    return true;
  }
  return helper(root, null, null);
};
// @lc code=end
