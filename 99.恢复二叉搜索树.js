/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let first, second, prev;
  function inorder(root) {
    if (!root) return;
    inorder(root.left);
    if (prev && prev.val > root.val) {
      if (!first) first = prev;
      second = root;
    }
    prev = root;
    inorder(root.right);
  }
  inorder(root);
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};
// @lc code=end
