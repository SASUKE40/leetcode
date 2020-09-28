/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  if (root.right !== null) {
    if (root.left !== null) {
      root.left.next = root.right;
    }
    root.right.next = findNext(root.next);
  } else if (root.left !== null) root.left.next = findNext(root.next);
  connect(root.right);
  connect(root.left);
  return root;
};

function findNext(node) {
  while (node) {
    if (node.left) return node.left;
    if (node.right) return node.right;
    node = node.next;
  }
  return null;
}
// @lc code=end
