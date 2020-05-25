/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
  let ans = countSum(root);
  return Math.max(ans[0], ans[1]);
};
function countSum(root) {
  if (root === null) return [0, 0];
  let left = countSum(root.left);
  let right = countSum(root.right);
  let robNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  let rob = root.val + left[0] + right[0];
  return [robNot, rob];
}
// @lc code=end
