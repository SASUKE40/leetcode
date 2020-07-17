/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};

function helper(nums, left, right) {
  if (left > right) return null;
  let mid = (left + right) >> 1;
  let root = new TreeNode(nums[mid]);
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);
  return root;
}
// @lc code=end
