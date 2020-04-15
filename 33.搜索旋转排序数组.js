/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, low, high) {
  if (low > high) return -1;
  let mid = low + Math.floor((high - low) / 2);
  if (nums[mid] === target) {
    return mid;
  }
  if (nums[low] <= nums[mid]) {
    if (nums[low] <= target && target < nums[mid]) {
      return binarySearch(nums, target, low, mid - 1);
    }
    return binarySearch(nums, target, mid + 1, high);
  } else {
    if (nums[mid] < target && target <= nums[high]) {
      return binarySearch(nums, target, mid + 1, high);
    }
    return binarySearch(nums, target, low, mid - 1);
  }
}
// @lc code=end
