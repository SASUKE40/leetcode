/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === '1') {
        islandCount++;
        DFS(grid, i, j);
      }
    }
  }
  return islandCount;
};

function DFS(grid, i, j) {
  if (
    i < 0 ||
    i === grid.length ||
    j < 0 ||
    j === grid[i].length ||
    grid[i][j] === '0'
  ) {
    return;
  }
  grid[i][j] = '0';
  DFS(grid, i - 1, j);
  DFS(grid, i + 1, j);
  DFS(grid, i, j - 1);
  DFS(grid, i, j + 1);
}

let count = numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]);
console.log('count', count);
// @lc code=end
