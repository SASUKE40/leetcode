/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currMaxSum = (maxSum = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    currMaxSum = Math.max(nums[i], nums[i] + currMaxSum);
    maxSum = Math.max(currMaxSum, maxSum);
  }
  return maxSum;
};
// @lc code=end
