153.find-minimum-in-rotated-sorted-array/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * cheated way
 * @param {Array} nums
 */
// var findMin = function(nums) {
//   nums = nums.sort((a, b) => a - b);
//   return nums[0];
// };

/**
 * O(n)
 * @param {Array} nums
 */
// var findMin = function(nums) {
//   if (!nums) return;
//   let min = nums[0];
//   for (let i = nums.length - 1; i > 0; i--) {
//     if (min < nums[i]) return min;
//     min = nums[i];
//   }
//   return min;
// };

/**
 * Binary Searching
 * Thanks bilibili danmu 
 * @param {Array} nums
 */
var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low !== high) {
    let mid = Math.floor((high + low) / 2);
    if (nums[low] < nums[high]) {
      return nums[low];
    } else {
      if (nums[mid] < nums[low]) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return nums[low];
};

// @lc code=end
