/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
var constructMaximumBinaryTree = function(nums) {
  function findMax(nums, i, j) {
    let max = nums[i];
    while (i <= j) {
      max = nums[i] > max ? nums[i] : max;
      i++;
    }
    return nums.indexOf(max);
  }

  let root = new TreeNode();
  function buildTree(node, i, j) {
    if (i === j) {
      node.val = nums[i];
      return;
    }
    let max = findMax(nums, i, j);
    node.val = nums[max];
    if (i <= max - 1) {
      node.left = new TreeNode();
      buildTree(node.left, i, max - 1);
    }
    if (max + 1 <= j) {
      node.right = new TreeNode();
      buildTree(node.right, max + 1, j);
    }
  }
  buildTree(root, 0, nums.length - 1);
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));

// @lc code=end
