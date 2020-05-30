/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length;
  let ans = [];
  while (l < r) {
    let m = (l + r) >> 1;
    if (nums[m] < target) l = m + 1;
    else r = m;
  }
  if (l === nums.length || nums[l] !== target) return [-1, -1];
  ans.push(l);
  l = 0;
  r = nums.length;
  while (l < r) {
    let m = (l + r) >> 1;
    if (nums[m] > target) r = m;
    else l = m + 1;
  }
  ans.push(l - 1);
  return ans;
};
// @lc code=end
