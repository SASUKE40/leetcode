/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0;
  let l = 0;
  let r = nums.length - 1;
  while (i <= r) {
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[l];
      nums[l] = temp;
      i++;
      l++;
    } else if (nums[i] === 2) {
      let temp = nums[i];
      nums[i] = nums[r];
      nums[r] = temp;
      r--;
    } else {
      i++;
    }
  }
};
// @lc code=end
