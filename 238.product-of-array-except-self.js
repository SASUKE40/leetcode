/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let L = new Array(nums.length).fill(0);
  L[0] = 1;
  let R = new Array(nums.length).fill(0);
  R[R.length - 1] = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i];
    L[i + 1] = num * L[i];
  }

  for (let i = nums.length - 1; i > 0; i--) {
    const num = nums[i];
    R[i - 1] = num * R[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = L[i] * R[i];
  }
  return nums;
};

// @lc code=end
