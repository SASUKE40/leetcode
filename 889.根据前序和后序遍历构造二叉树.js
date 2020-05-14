/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  if (pre.length === 0) return null;
  if (pre.length === 1) return new TreeNode(pre[0]);
  let root = new TreeNode(pre[0]);
  let leftIndex = post.indexOf(pre[1]);
  // let rightIndex = pre.indexOf(post[post.length - 2]);

  root.left = constructFromPrePost(
    pre.slice(1, leftIndex + 2),
    post.slice(0, leftIndex + 1)
  );
  root.right = constructFromPrePost(
    pre.slice(leftIndex + 2, pre.length),
    post.slice(leftIndex + 1, post.length - 1)
  );
  return root;
};
// @lc code=end
