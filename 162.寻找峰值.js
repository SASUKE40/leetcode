/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = ((l + r) / 2) >> 0;
    if (nums[m] < nums[m + 1]) l = m + 1;
    else r = m;
  }
  return l;
};
// @lc code=end
