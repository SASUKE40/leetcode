/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let dp = new Array(s1.length + 1);
  for (let i = 0; i < s1.length + 1; i++) {
    dp[i] = new Array(s2.length + 1).fill(false);
  }
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) dp[i][j] = true;
      else if (i === 0) dp[i][j] = s2[j - 1] === s3[i + j - 1] && dp[i][j - 1];
      else if (j === 0) dp[i][j] = s1[i - 1] === s3[i + j - 1] && dp[i - 1][j];
      else
        dp[i][j] =
          (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]) ||
          (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]);
    }
  }
  return dp[s1.length][s2.length];
};
// @lc code=end
