/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let row = matrix.length,
    colum = matrix[0] ? matrix[0].length : 0,
    _result = 0,
    dp = Array.from({length: row}, () => Array(colum).fill(0));
  if (row === 0 || colum === 0) return _result;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < colum; j++) {
      _result = Math.max(_result, dfs(i, j));
    }
  }
  function dfs(r, c) {
    if (dp[r][c]) return dp[r][c];
    dp[r][c] = 1;
    if (c - 1 >= 0 && matrix[r][c - 1] > matrix[r][c])
      dp[r][c] = Math.max(dp[r][c], dfs(r, c - 1) + 1);
    if (c + 1 < colum && matrix[r][c + 1] > matrix[r][c])
      dp[r][c] = Math.max(dp[r][c], dfs(r, c + 1) + 1);
    if (r - 1 >= 0 && matrix[r - 1][c] > matrix[r][c])
      dp[r][c] = Math.max(dp[r][c], dfs(r - 1, c) + 1);
    if (r + 1 < row && matrix[r + 1][c] > matrix[r][c])
      dp[r][c] = Math.max(dp[r][c], dfs(r + 1, c) + 1);
    return dp[r][c];
  }
  return _result;
};
// @lc code=end
