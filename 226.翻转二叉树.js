/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function helper(root) {
    if (!root) return;
    helper(root.left);
    helper(root.right);
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
  }
  helper(root);
  return root;
};
// @lc code=end
