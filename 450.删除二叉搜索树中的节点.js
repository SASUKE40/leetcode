/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left && root.right) {
      let min = root.right;
      while (min.left) min = min.left;
      root.val = min.val;
      root.right = deleteNode(root.right, min.val);
    } else {
      let newRoot = root.left ? root.left : root.right;
      root.left = root.right = null;
      delete root;
      return newRoot;
    }
  }
  return root;
};
// @lc code=end
