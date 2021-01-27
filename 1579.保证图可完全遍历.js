/*
 * @lc app=leetcode.cn id=1579 lang=javascript
 *
 * [1579] 保证图可完全遍历
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
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

var maxNumEdgesToRemove = function (n, edges) {
  const ufa = new UnionFind(n), ufb = new UnionFind(n);
  let ans = 0;

  // 节点编号改为从 0 开始
  for (const edge of edges) {
    edge[1] -= 1;
    edge[2] -= 1;
  }
  // 公共边
  for (const [t, u, v] of edges) {
    if (t === 3) {
      if (!ufa.unite(u, v)) {
        ans += 1;
      } else {
        ufb.unite(u, v);
      }
    }
  }
  // 独占边
  for (const [t, u, v] of edges) {
    if (t === 1) {
      // Alice 独占边
      if (!ufa.unite(u, v)) {
        ans += 1;
      }
    } else if (t === 2) {
      // Bob 独占边
      if (!ufb.unite(u, v)) {
        ans += 1;
      }
    }
  }
  if (ufa.setCount !== 1 || ufb.setCount !== 1) {
    return -1;
  }
  return ans;
};
// @lc code=end

