/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null;
  return helper(inorder, postorder, new TreeNode());
};

function helper(inorder, postorder, treeNode) {
  let root = postorder.pop();
  treeNode.val = root;
  let i = inorder.indexOf(root);
  let left = inorder.slice(0, i);
  let right = inorder.slice(i + 1);
  if (right.length > 0) {
    treeNode.right = new TreeNode();
    helper(right, postorder, treeNode.right);
  }
  if (left.length > 0) {
    treeNode.left = new TreeNode();
    helper(left, postorder, treeNode.left);
  }
  return treeNode;
}
// @lc code=end
