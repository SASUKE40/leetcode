/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) candidate = nums[i];
    count = nums[i] === candidate ? count + 1 : count - 1;
  }
  return candidate;
};
// @lc code=end
