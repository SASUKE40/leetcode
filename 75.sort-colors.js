/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let p0 = (cur = 0);
  let p2 = nums.length - 1;
  while (cur <= p2) {
    if (nums[cur] === 0) {
      [nums[cur], nums[p0]] = [nums[p0], nums[cur]];
      p0++;
      cur++;
    } else if (nums[cur] === 2) {
      [nums[cur], nums[p2]] = [nums[p2], nums[cur]];
      p2--;
    } else {
      cur++;
    }
  }
};
// @lc code=end
