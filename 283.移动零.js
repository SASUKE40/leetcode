/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0, fast = 0; i < nums.length; i++) {
    if (nums[i] !== 0) [nums[fast++], nums[i]] = [nums[i], nums[fast]];
  }
};
// @lc code=end
