/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let slow = (fast = 0);
  let count = Infinity;
  let sum = 0;
  while (slow < nums.length && fast < nums.length) {
    sum += nums[fast];
    while (sum >= s) {
      count = Math.min(count, fast - slow + 1);
      sum -= nums[slow++];
    }
    fast++;
  }
  return count === Infinity ? 0 : count;
};
