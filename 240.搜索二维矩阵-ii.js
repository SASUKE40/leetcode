/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  let row = matrix.length - 1;
  let col = 0;
  while ((row >= 0) & (col < matrix[0].length)) {
    if (target > matrix[row][col]) {
      col++;
    } else if (target < matrix[row][col]) {
      row--;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
