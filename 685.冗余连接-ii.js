/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  const nodesCount = edges.length;
  const uf = new UnionFind(nodesCount + 1);
  const parent = new Array(nodesCount + 1);
  for (let i = 1; i <= nodesCount; i++) {
    parent[i] = i;
  }
  let conflict = -1;
  let cycle = -1;
  for (let i = 0; i < nodesCount; i++) {
    let edge = edges[i];
    let node1 = edge[0];
    let node2 = edge[1];
    if (parent[node2] !== node2) {
      conflict = i;
    } else {
      parent[node2] = node1;
      if (uf.find(node1) === uf.find(node2)) {
        cycle = i;
      } else {
        uf.union(node1, node2);
      }
    }
  }
  if (conflict < 0) {
    let redundant = [edges[cycle][0], edges[cycle][1]];
    return redundant;
  } else {
    let conflictEdge = edges[conflict];
    if (cycle >= 0) {
      let redundant = [parent[conflictEdge[1]], conflictEdge[1]];
      return redundant;
    } else {
      let redundant = [conflictEdge[0], conflictEdge[1]];
      return redundant;
    }
  }
};

class UnionFind {
  ancestor = [];
  constructor(n) {
    this.ancestor = new Array(n);
    for (var i = 0; i < n; i++) {
      this.ancestor[i] = i;
    }
  }
  union(index1, index2) {
    this.ancestor[this.find(index1)] = this.find(index2);
  }
  find(index) {
    if (this.ancestor[index] !== index) {
      this.ancestor[index] = this.find(this.ancestor[index]);
    }
    return this.ancestor[index];
  }
}
// @lc code=end
