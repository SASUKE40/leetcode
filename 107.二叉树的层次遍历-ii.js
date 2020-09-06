/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
  let levelOrder = [];
  if (root === null) {
    return levelOrder;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let level = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levelOrder.unshift(level);
  }
  return levelOrder;
};
// @lc code=end
