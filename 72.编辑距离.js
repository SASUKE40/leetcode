/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
  }
  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let corner = dp[i - 1][j - 1];
      let top = dp[i][j - 1] + 1;
      let left = dp[i - 1][j] + 1;
      if (word1[i - 1] !== word2[j - 1]) corner += 1;
      dp[i][j] = Math.min(Math.min(left, top), corner);
    }
  }
  return dp[m][n];
};
// @lc code=end
