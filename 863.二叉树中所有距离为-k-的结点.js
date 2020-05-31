/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  let parent = new Map();
  function buildGraph(node, par) {
    if (node !== null) {
      let parList = parent.get(node) || [];
      parList.push(par);
      parent.set(node, parList);
      let childList = parent.get(par) || [];
      childList.push(node);
      parent.set(par, childList);
      if (node.left) buildGraph(node.left, node);
      if (node.right) buildGraph(node.right, node);
    }
  }
  buildGraph(root, null);
  let queue = [target];
  let seen = [target];
  let ans = [];
  let k = 0;

  while (queue.length > 0 && k <= K) {
    let size = queue.length;
    while (size--) {
      let node = queue.shift();
      if (k === K && node) ans.push(node.val);
      let childList = parent.get(node);
      for (const child of childList) {
        if (seen.includes(child)) continue;
        queue.push(child);
        seen.push(child);
      }
    }
    k++;
  }
  return ans;
};
// @lc code=end
