/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function(root) {
  this.stack = [];
  let p = root;
  while (p) {
    this.stack.push(p);
    p = p.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let cur = this.stack.pop();
  if (cur.right) {
    let p = cur.right;
    while (p) {
      this.stack.push(p);
      p = p.left;
    }
  }
  return cur.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
