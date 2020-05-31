/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  function traverse(root, tmp) {
    if (!root) return false;
    let curSum = tmp + root.val;
    if (curSum === sum && !root.left && !root.right) return true;
    if (traverse(root.left, curSum)) return true;
    if (traverse(root.right, curSum)) return true;
    return false;
  }
  return traverse(root, 0);
};
// @lc code=end
