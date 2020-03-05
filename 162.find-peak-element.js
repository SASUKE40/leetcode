/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) {
//   if (!nums) return -1;
//   for (let i = 0; i < nums.length; i++) {
//     let left = i === 0 ? -Infinity : nums[i - 1];
//     let right = i === nums.length - 1 ? -Infinity : nums[i + 1];
//     if (nums[i] > left && nums[i] > right) return i;
//   }
// };

/**
 * Binary Search
 * @param {number[]} nums
 */
var findPeakElement = function(nums) {
  if (!nums) return -1;
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
// @lc code=end
