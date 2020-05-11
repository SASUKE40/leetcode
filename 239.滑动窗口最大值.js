/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let window = [];
  if (k === 0) return res;
  let i = 0;
  while (i < nums.length) {
    if (window && window[0] <= i - k) window.shift();
    while (window && nums[i] > nums[window[window.length - 1]]) window.pop();
    window.push(i);
    i++;
    if (i >= k) res.push(nums[window[0]]);
  }
  return res;
};
// @lc code=end
