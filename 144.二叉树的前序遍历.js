/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  if (root === null) return [];
  let ans = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.pop();
    ans.push(node.val);
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }
  return ans;
};
// @lc code=end
