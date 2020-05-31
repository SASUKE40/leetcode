/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  let root = postorder[postorder.length - 1];
  let i = inorder.indexOf(root);
  let node = new TreeNode(root);
  node.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  node.right = buildTree(
    inorder.slice(i + 1),
    postorder.slice(i, postorder.length - 1)
  );
  return node;
};
// @lc code=end
