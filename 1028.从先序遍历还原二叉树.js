/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
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
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let index = 0;
  function buildTree(S, level) {
    let curLevel = 0;
    while (index < S.length && S[index] === '-') {
      curLevel++;
      index++;
    }
    if (curLevel < level) {
      index -= curLevel;
      return null;
    }
    let start = index;
    while (index < S.length && S[index] !== '-') {
      index++;
    }
    let val = S.slice(start, index);
    let curNode = new TreeNode(val);
    curNode.left = buildTree(S, level + 1);
    curNode.right = buildTree(S, level + 1);
    return curNode;
  }
  return buildTree(S, 0);
};
// @lc code=end
