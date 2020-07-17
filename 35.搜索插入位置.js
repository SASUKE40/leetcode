/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      if (nums[mid - 1] < target) return mid;
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left;
};
// @lc code=end
