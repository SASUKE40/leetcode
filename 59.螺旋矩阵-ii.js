/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let num = 1;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      matrix[top][column] = num;
      num++;
    }
    for (let row = top + 1; row <= bottom; row++) {
      matrix[row][right] = num;
      num++;
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        matrix[bottom][column] = num;
        num++;
      }
      for (let row = bottom; row > top; row--) {
        matrix[row][left] = num;
        num++;
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return matrix;
};
// @lc code=end

