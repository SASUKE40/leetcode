/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0,
    maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
    return false;
  }
  const target = Math.floor(sum / 2);
  if (maxNum > target) {
    return false;
  }
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let j = target; j >= num; --j) {
      dp[j] |= dp[j - num];
    }
  }
  return dp[target];
};
// @lc code=end
