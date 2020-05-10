/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = (min = result = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(nums[i], nums[i] * max, nums[i] * min);
    min = Math.min(nums[i], nums[i] * temp, nums[i] * min);
    result = Math.max(result, max);
  }
  return result;
};
// @lc code=end
