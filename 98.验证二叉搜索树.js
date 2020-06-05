/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   function traverse(root, low, high) {
//     if (!root) return true;
//     if (root.val <= low || root.val >= high) return false;
//     return (
//       traverse(root.left, low, root.val) && traverse(root.right, root.val, high)
//     );
//   }
//   return traverse(root, -Infinity, Infinity);
// };

var isValidBST = function (root) {
  let prev_ = null;
  return inOrder(root);
  function inOrder(root) {
    if (!root) return true;
    if (!inOrder(root.left)) return false;
    if (prev_ && root.val <= prev_.val) return false;
    prev_ = root;
    return inOrder(root.right);
  }
};
// @lc code=end
