/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function (root) {
  helper(root, null);
};
function helper(root, prev) {
  if (root === null) return prev;
  prev = helper(root.right, prev);
  prev = helper(root.left, prev);
  root.right = prev;
  root.left = null;
  prev = root;
  return prev;
}
// @lc code=end
