/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  function swap(a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]]
  }
  k %= nums.length;
  k = nums.length - k;
  for (let i = 0; i < k >> 1; i++) {
    swap(i, k - i - 1)
  }
  for (let i = 0; i < nums.length - k >> 1; i++) {
    swap(i + k, nums.length - i - 1)
  }
  for (let i = 0; i < nums.length >> 1; i++) {
    swap(i, nums.length - i - 1)
  }
};
// @lc code=end

