/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function(root) {
  let result = [];
  let level = 0;
  helper(root, result, level);
  return result;
};

function helper(root, list, level) {
  if (root === null) return;
  if (!list[level]) list[level] = [];
  list[level].push(root.val);
  helper(root.left, list, level + 1);
  helper(root.right, list, level + 1);
}

// @lc code=end
