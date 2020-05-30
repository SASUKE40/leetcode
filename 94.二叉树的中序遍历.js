/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let ans = [];
  function helper(root) {
    if (!root) return;
    helper(root.left);
    ans.push(root.val);
    helper(root.right);
  }
  helper(root);
  return ans;
};
// @lc code=end
