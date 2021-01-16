/*
 * @lc app=leetcode.cn id=803 lang=javascript
 *
 * [803] 打砖块
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function (grid, hits) {
  const h = grid.length; w = grid[0].length;

  const uf = new UnionFind(h * w + 1);
  const status = JSON.parse(JSON.stringify(grid));;
  for (let i = 0; i < hits.length; i++) {
    status[hits[i][0]][hits[i][1]] = 0;
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (status[i][j] === 1) {
        if (i === 0) {
          uf.merge(h * w, i * w + j);
        }
        if (i > 0 && status[i - 1][j] === 1) {
          uf.merge(i * w + j, (i - 1) * w + j);
        }
        if (j > 0 && status[i][j - 1] === 1) {
          uf.merge(i * w + j, i * w + j - 1);
        }
      }
    }
  }

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const ret = new Array(hits.length).fill(0);
  for (let i = hits.length - 1; i >= 0; i--) {
    const r = hits[i][0], c = hits[i][1];
    if (grid[r][c] === 0) {
      console.log(1)
      continue;
    }
    const prev = uf.size(h * w);

    if (r === 0) {
      console.log(2)
      uf.merge(c, h * w);
    }
    for (const [dr, dc] of directions) {
      const nr = r + dr, nc = c + dc;

      if (nr >= 0 && nr < h && nc >= 0 && nc < w) {
        if (status[nr][nc] === 1) {
          console.log(3)
          uf.merge(r * w + c, nr * w + nc);
        }
      }
    }
    const size = uf.size(h * w);
    ret[i] = Math.max(0, size - prev - 1);
    status[r][c] = 1;
  }
  return ret;
};

class UnionFind {
  constructor(n) {
    this.f = new Array(n).fill(0).map((element, index) => index);
    this.sz = new Array(n).fill(1);
  }

  find(x) {
    if (this.f[x] === x) {
      return x;
    }
    const newf = this.find(this.f[x]);
    this.f[x] = newf;
    return this.f[x];
  }

  merge(x, y) {
    const fx = this.find(x), fy = this.find(y);
    if (fx === fy) {
      return;
    }
    this.f[fx] = fy;
    this.sz[fy] += this.sz[fx];
  }

  size(x) {
    return this.sz[this.find(x)];
  }
}
// @lc code=end

