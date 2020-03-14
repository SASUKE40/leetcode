/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s === null || p === null) return false;
  let dp = new Array(s.length + 1).fill(false);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(p.length + 1).fill(false);
  }
  dp[0][0] = true;

  for (let j = 0; j < p.length; j++) {
    if (p[j] === '*') {
      dp[0][j + 1] = dp[0][j - 1];
    }
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (s[i] === p[j] || p[j] === '.') {
        dp[i + 1][j + 1] = dp[i][j];
      } else if (p[j] === '*') {
        if (p[j - 1] === '.' || p[j - 1] === s[i]) {
          dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        }
      } else {
        dp[i + 1][j + 1] = false;
      }
    }
  }
  return dp[s.length][p.length];
};


// @lc code=end
