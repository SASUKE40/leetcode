/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let n = s.length;
  let dp = new Array(n);
  let ans = '';
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n);
  }
  for (let l = 0; l < n; l++) {
    for (let i = 0; i + l < n; i++) {
      let j = i + l;
      if (l === 0) dp[i][j] = true;
      else if (l === 1) dp[i][j] = s[i] === s[j];
      else dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j] && j - i + 1 > ans.length) ans = s.substring(i, j + 1);
    }
  }
  return ans;
};
// @lc code=end
