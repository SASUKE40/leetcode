/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // 最小的和第二小的
  let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
  // 最大的、第二大的和第三大的
  let max1 = -Number.MAX_SAFE_INTEGER, max2 = -Number.MAX_SAFE_INTEGER, max3 = -Number.MAX_SAFE_INTEGER;

  for (const x of nums) {
    if (x < min1) {
      min2 = min1;
      min1 = x;
    } else if (x < min2) {
      min2 = x;
    }

    if (x > max1) {
      max3 = max2;
      max2 = max1;
      max1 = x;
    } else if (x > max2) {
      max3 = max2;
      max2 = x;
    } else if (x > max3) {
      max3 = x;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
// @lc code=end

