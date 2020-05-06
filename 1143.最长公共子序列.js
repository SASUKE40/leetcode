/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let text1Len = text1.length;
  let text2Len = text2.length;
  let dp = new Array(text1Len + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(text2Len + 1).fill(0);
  }
  for (let i = 0; i < text1Len; i++) {
    for (let j = 0; j < text2Len; j++) {
      if (text1[i] === text2[j]) dp[i + 1][j + 1] = dp[i][j] + 1;
      else dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  return dp[text1Len][text2Len];
};
// @lc code=end
