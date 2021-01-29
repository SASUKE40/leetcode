/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const edges = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const id = i * n + j;
      if (i > 0) {
        edges.push([id - n, id, Math.abs(heights[i][j] - heights[i - 1][j])]);
      }
      if (j > 0) {
        edges.push([id - 1, id, Math.abs(heights[i][j] - heights[i][j - 1])]);
      }
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(m * n);
  let ans = 0;
  for (const edge of edges) {
    const x = edge[0], y = edge[1], v = edge[2];
    uf.unite(x, y);
    if (uf.connected(0, m * n - 1)) {
      ans = v;
      break;
    }
  }
  return ans;
};

// 并查集模板
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((element, index) => index);
    this.size = new Array(n).fill(1);
    // 当前连通分量数目
    this.setCount = n;
  }

  findset(x) {
    if (this.parent[x] === x) {
      return x;
    }
    this.parent[x] = this.findset(this.parent[x]);
    return this.parent[x];
  }

  unite(a, b) {
    let x = this.findset(a), y = this.findset(b);
    if (x === y) {
      return false;
    }
    if (this.size[x] < this.size[y]) {
      [x, y] = [y, x];
    }
    this.parent[y] = x;
    this.size[x] += this.size[y];
    this.setCount -= 1;
    return true;
  }

  connected(a, b) {
    const x = this.findset(a), y = this.findset(b);
    return x === y;
  }
}