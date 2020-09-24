/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  let base = 0,
    count = 0,
    maxCount = 0;
  let answer = [];

  const update = (x) => {
    if (x === base) {
      ++count;
    } else {
      count = 1;
      base = x;
    }
    if (count === maxCount) {
      answer.push(base);
    }
    if (count > maxCount) {
      maxCount = count;
      answer = [base];
    }
  };

  let cur = root,
    pre = null;
  while (cur !== null) {
    if (cur.left === null) {
      update(cur.val);
      cur = cur.right;
      continue;
    }
    pre = cur.left;
    while (pre.right !== null && pre.right !== cur) {
      pre = pre.right;
    }
    if (pre.right === null) {
      pre.right = cur;
      cur = cur.left;
    } else {
      pre.right = null;
      update(cur.val);
      cur = cur.right;
    }
  }
  return answer;
};
// @lc code=end
