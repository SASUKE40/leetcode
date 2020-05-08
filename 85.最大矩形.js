/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;
  function maxArea(heights) {
    heights = [0, ...heights, 0];
    let max = 0;
    let stack = [];
    for (let i = 0; i < heights.length; i++) {
      while (stack && heights[stack[stack.length - 1]] > heights[i]) {
        max = Math.max(
          max,
          heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
        );
      }
      stack.push(i);
    }
    return max;
  }
  let max = 0;
  let dp = new Array(matrix[0].length).fill(0);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0;
    }
    max = Math.max(max, maxArea(dp));
  }
  return max;
};
// @lc code=end
