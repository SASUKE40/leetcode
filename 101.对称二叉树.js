/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  function helper(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return (
      left.val === right.val &&
      helper(left.left, right.right) &&
      helper(left.right, right.left)
    );
  }
  return helper(root, root);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function helper(left, right) {
    let queue = [];
    queue.push(left);
    queue.push(right);
    while (queue.length > 0) {
      let l = queue.pop();
      let r = queue.pop();
      if (!l && !r) continue;
      if (!l || !r || l.val !== r.val) return false;
      queue.push(l.left);
      queue.push(r.right);
      queue.push(l.right);
      queue.push(r.left);
    }
    return true;
  }
  return helper(root, root);
};
// @lc code=end
