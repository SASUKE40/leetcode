/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head == null) return null;
  let len = 0;
  let h = head;
  while (head) {
    len++;
    head = head.next;
  }

  const buildBST = (start, end) => {
    if (start > end) return null;
    const mid = (start + end) >>> 1;
    const left = buildBST(start, mid - 1);
    const root = new TreeNode(h.val);

    h = h.next;
    root.left = left;

    root.right = buildBST(mid + 1, end);
    return root;
  };

  return buildBST(0, len - 1);
};
// @lc code=end
