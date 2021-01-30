/*
 * @lc app=leetcode.cn id=778 lang=javascript
 *
 * [778] 水位上升的泳池中游泳
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;
  const f = new Array(n * n).fill(0)
    .map((element, index) => index);

  const idx = new Array(n * n).fill(0)
    .map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      idx[grid[i][j]][0] = i;
      idx[grid[i][j]][1] = j;
    }
  }

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let threshold = 0; threshold < n * n; threshold++) {
    const i = idx[threshold][0], j = idx[threshold][1];
    for (const direction of directions) {
      const ni = i + direction[0], nj = j + direction[1];
      if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] <= threshold) {
        merge(f, i * n + j, ni * n + nj);
      }
    }
    if (find(f, 0) === find(f, n * n - 1)) {
      return threshold;
    }
  }
  return -1;
};

const find = (f, x) => {
  if (f[x] === x) {
    return x;
  }
  const fa = find(f, f[x]);
  f[x] = fa;
  return fa;
}

const merge = (f, x, y) => {
  const fx = find(f, x), fy = find(f, y);
  f[fx] = fy;
}
// @lc code=end

