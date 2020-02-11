/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(nums[i] + i, max);
  }
  return max >= nums.length - 1;
};
// @lc code=end
