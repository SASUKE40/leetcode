/*
 * @lc app=leetcode.cn id=837 lang=javascript
 *
 * [837] 新21点
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  let dp = new Array(K + W);
  let sum = 0;
  for (let i = K; i < K + W; i++) {
    dp[i] = i <= N ? 1 : 0;
    sum += dp[i];
  }
  for (let i = K - 1; i >= 0; i--) {
    dp[i] = sum / W;
    sum = sum - dp[i + W] + dp[i];
  }
  return dp[0];
};
// @lc code=end
