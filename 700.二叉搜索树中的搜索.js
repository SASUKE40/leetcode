/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let cur = root;
  while (cur) {
    if (cur.val > val) cur = cur.left;
    else if (cur.val < val) cur = cur.right;
    else return cur;
  }
  return null;
};
// @lc code=end
