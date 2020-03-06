/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  function traverse(node, p, q) {
    if (node === null) return false;
    let left = traverse(node.left, p, q);
    let right = traverse(node.right, p, q);
    let mid = node === p || node === q ? 1 : 0;
    if (left + right + mid >= 2) ans = node;
    return left + right + mid > 0;
  }
  traverse(root, p, q);
  return ans;
};
// @lc code=end
