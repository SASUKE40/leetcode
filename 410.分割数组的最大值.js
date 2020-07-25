/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
    if (left < nums[i]) {
      left = nums[i];
    }
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (check(nums, mid, m)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
function check(nums, x, m) {
  let sum = 0;
  let cnt = 1;
  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > x) {
      cnt++;
      sum = nums[i];
    } else {
      sum += nums[i];
    }
  }
  return cnt <= m;
}
// @lc code=end
