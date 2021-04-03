/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const ans = [];
  const nodeQueue = [root];

  let isOrderLeft = true;

  while (nodeQueue.length) {
    let levelList = [];
    const size = nodeQueue.length;
    for (let i = 0; i < size; ++i) {
      const node = nodeQueue.shift();
      if (isOrderLeft) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      if (node.left !== null) {
        nodeQueue.push(node.left);
      }
      if (node.right !== null) {
        nodeQueue.push(node.right);
      }
    }
    ans.push(levelList);
    isOrderLeft = !isOrderLeft;
  }

  return ans;
};
// @lc code=end

