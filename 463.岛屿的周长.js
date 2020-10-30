/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const n = grid.length,
    m = grid[0].length;
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j]) {
        let cnt = 0;
        for (let k = 0; k < 4; ++k) {
          let tx = i + dx[k];
          let ty = j + dy[k];
          if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
            cnt += 1;
          }
        }
        ans += cnt;
      }
    }
  }
  return ans;
};
// @lc code=end
