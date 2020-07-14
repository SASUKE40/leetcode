/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  let f = new Array(n);
  for (let i = 0; i < n; i++) {
    f[i] = new Array(n).fill(0);
  }
  f[0][0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    f[i][0] = f[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; j++) {
      f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + triangle[i][j];
    }
    f[i][i] = f[i - 1][i - 1] + triangle[i][i];
  }
  return Math.min(...f[n - 1]);
};
// @lc code=end
