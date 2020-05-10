/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let l = new Array(nums.length).fill(1);
  let r = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    l[i + 1] = l[i] * nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    l[i] *= r;
    r *= nums[i];
  }
  return l;
};
// @lc code=end
