/*
 * @lc app=leetcode.cn id=330 lang=javascript
 *
 * [330] 按要求补齐数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let patches = 0;
  let x = 1;
  const length = nums.length;
  let index = 0;
  while (x <= n) {
    if (index < length && nums[index] <= x) {
      x += nums[index];
      index++;
    } else {
      x *= 2;
      patches++;
    }
  }
  return patches;
};
// @lc code=end

