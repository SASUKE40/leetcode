/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let cur = m + n - 1;
  while (cur >= 0) {
    if (n === 0) return;
    if (m === 0) {
      nums1[cur--] = nums2[--n];
      continue;
    }
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[cur--] = nums2[--n];
    } else {
      nums1[cur--] = nums1[--m];
    }
  }
};
// @lc code=end
