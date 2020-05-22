/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length;
  const n = p.length;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1).fill(false);
  }
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    dp[i][0] = p[i - 1] === '*' && dp[i - 1][0];
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[i - 1] === '?' || p[i - 1] === s[j - 1])
        dp[i][j] = dp[i - 1][j - 1];
      else if (p[i - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }
  return dp[n][m];
};
// @lc code=end
