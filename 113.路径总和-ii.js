/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let ret = [];
  let path = [];
  function dfs(root, sum) {
    if (root === null) {
      return;
    }
    path.push(root.val);
    sum -= root.val;
    if (root.left === null && root.right === null && sum === 0) {
      ret.push([...path]);
    }
    dfs(root.left, sum);
    dfs(root.right, sum);
    path.pop();
  }
  dfs(root, sum);
  return ret;
};

// @lc code=end
