/*
 * @lc app=leetcode.cn id=940 lang=javascript
 *
 * [940] 不同的子序列 II
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number}
 */
var distinctSubseqII = function (S) {
  const dp = [];
  const count = {};
  const MOD = 1000000007;
  let length = S.length;
  for (let i = 0; i < length; i++) {
    const preDp = dp[i - 1] || 0;
    if (typeof count[S[i]] === 'undefined') {
      dp[i] = preDp * 2 + 1;
    } else {
      const prePositionDp = dp[count[S[i]] - 1] || 0;
      dp[i] = preDp * 2 - prePositionDp;
      if (dp[i] < 0) {
        dp[i] += MOD;
      }
    }
    dp[i] %= MOD;
    count[S[i]] = i;
  }
  return dp[S.length - 1];
};
// @lc code=end
