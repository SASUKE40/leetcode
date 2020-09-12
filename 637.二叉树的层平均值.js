/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  let res = [];
  let map = new Map();
  const dfs = (root, l) => {
    if (!root) return;
    if (map.has(l)) {
      let num = map.get(l);
      num[0] += root.val;
      num[1] += 1;
      map.set(l, num);
    } else {
      let num = [root.val, 1];
      map.set(l, num);
    }
    dfs(root.left, l + 1);
    dfs(root.right, l + 1);
  };
  dfs(root, 1);
  for (let [key, val] of map) {
    res.push(val[0] / val[1]);
  }
  return res;
};

// @lc code=end
