/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  const construct_paths = (root, path) => {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        // 当前节点是叶子节点
        paths.push(path); // 把路径加入到答案中
      } else {
        path += '->'; // 当前节点不是叶子节点，继续递归遍历
        construct_paths(root.left, path);
        construct_paths(root.right, path);
      }
    }
  };
  construct_paths(root, '');
  return paths;
};
// @lc code=end
