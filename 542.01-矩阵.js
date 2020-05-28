/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let dist = new Array(m);
  for (let i = 0; i < m; i++) {
    dist[i] = new Array(n).fill(Infinity);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dist[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      if (j > 0) dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i < m - 1) dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      if (j < n - 1) dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
    }
  }
  return dist;
};
// @lc code=end
