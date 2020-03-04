/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function(root) {
  let list = [];
  traverse(root, list, 0);
  return list;
};

function traverse(root, list, level) {
  if (root === null) return;
  if (!list[level]) list[level] = [];
  if (level % 2 === 1) {
    list[level].unshift(root.val);
  } else {
    list[level].push(root.val);
  }
  traverse(root.left, list, level + 1);
  traverse(root.right, list, level + 1);
}
// @lc code=end
