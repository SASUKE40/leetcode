235.lowest-common-ancestor-of-a-binary-search-tree/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
  if (root === null) return root;
  let ancestor = root;
  while (ancestor) {
    if (ancestor.val < p.val && ancestor.val < q.val) {
      ancestor = ancestor.right;
      continue;
    }
    if (ancestor.val > p.val && ancestor.val > q.val) {
      ancestor = ancestor.left;
      continue;
    }
    return ancestor;
  }
};
// @lc code=end
