/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = [];
  function traverse(node, depth) {
    if (node === null) return;
    if (!ans[depth]) ans[depth] = [];
    ans[depth].push(node.val);
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
  traverse(root, 0);
  return ans;
};
// @lc code=end
