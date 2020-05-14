/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (root === null) return;
  let queue = [];
  let result;
  queue.push(root);
  while (queue.length > 0) {
    result = queue[0].val;
    for (let i = 0; i < queue.length; i++) {
      let front = queue.shift();
      if (front.right) {
        queue.push(front.right);
      }
      if (front.left) {
        queue.push(front.left);
      }
    }
  }
  return result;
};
// @lc code=end
