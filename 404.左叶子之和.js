/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  return root !== null ? dfs(root) : 0;
};

function dfs(node) {
  let ans = 0;
  if (node.left !== null) {
    ans += isLeafNode(node.left) ? node.left.val : dfs(node.left);
  }
  if (node.right !== null && !isLeafNode(node.right)) {
    ans += dfs(node.right);
  }
  return ans;
}
function isLeafNode(node) {
  return node.left === null && node.right === null;
}
// @lc code=end
