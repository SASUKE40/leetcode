/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  if (len < 2) return 0;
  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(3);
  }
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] - prices[i]);
    dp[i][2] = dp[i - 1][0];
  }
  return Math.max(dp[len - 1][0], dp[len - 1][2]);
};
// @lc code=end
