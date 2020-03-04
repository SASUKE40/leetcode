/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
var isValidBST = function(root) {
  return helper(root, null, null);
};

function helper(root, low, high) {
  if (root === null) return true;
  if (low !== null && root.val <= low) return false;
  if (high !== null && root.val >= high) return false;
  if (!helper(root.left, low, root.val)) return false;
  if (!helper(root.right, root.val, high)) return false;
  return true;
}

// @lc code=end
