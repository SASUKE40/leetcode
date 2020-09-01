/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const len = nums.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
  }
  for (let i = 0; i < len; i++) {
    dp[i][i] = nums[i];
  }
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      const pickI = nums[i] - dp[i + 1][j];
      const pickJ = nums[j] - dp[i][j - 1];
      dp[i][j] = Math.max(pickI, pickJ);
    }
  }
  return dp[0][len - 1] >= 0;
};
// @lc code=end
