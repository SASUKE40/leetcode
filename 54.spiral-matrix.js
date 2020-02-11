/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ans = [];
  if (matrix.length === 0) {
    return ans;
  }
  let r1 = 0,
    r2 = matrix.length - 1,
    c1 = 0,
    c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) {
      ans.push(matrix[r1][c]);
    }
    for (let r = r1 + 1; r <= r2; r++) {
      ans.push(matrix[r][c2]);
    }
    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c--) {
        ans.push(matrix[r2][c]);
      }
      for (let r = r2; r > r1; r--) {
        ans.push(matrix[r][c1]);
      }
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return ans;
};
// @lc code=end
