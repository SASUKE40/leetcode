/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
  if (!root) return [];
  const stack = [root];
  const ret = [];
  let left = root.left;
  let item = null;
  while (left) {
    stack.push(left);
    left = left.left;
  }
  while ((item = stack.pop())) {
    ret.push(item.val);
    let t = item.right;
    while (t) {
      stack.push(t);
      t = t.left;
    }
  }
  return ret;
};
// @lc code=end
