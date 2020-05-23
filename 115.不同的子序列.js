/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let dp = Array(t.length + 1);
  for (let i = 0; i <= t.length; i++) {
    if (i === 0) dp[i] = new Array(s.length + 1).fill(1);
    else dp[i] = new Array(s.length + 1).fill(0);
  }
  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      // copy left value
      dp[i][j] = dp[i][j - 1];
      // add dp[i - 1][j - 1]
      if (s[j - 1] === t[i - 1]) dp[i][j] += dp[i - 1][j - 1];
    }
  }
  return dp[t.length][s.length];
};
// @lc code=end
