/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const dsu = new DisjointSetUnion();
  for (const [x, y] of stones) {
    dsu.unionSet(x, y + 10001);
  }
  return stones.length - dsu.numberOfConnectedComponent();
};

class DisjointSetUnion {
  constructor() {
    this.f = new Map();
    this.rank = new Map();
  }

  find(x) {
    if (!this.f.has(x)) {
      this.f.set(x, x);
      this.rank.set(x, 1);
      return x;
    }
    if (this.f.get(x) === x) {
      return x;
    }
    this.f.set(x, this.find(this.f.get(x)));
    return this.f.get(x);
  }

  unionSet(x, y) {
    let fx = this.find(x), fy = this.find(y);
    if (fx && fy) {

    }
    if (fx === fy) {
      return;
    }
    if (this.rank.get(fx) < this.rank.get(fy)) {
      [fx, fy] = [fy, fx];
    }
    this.rank.set(fx, this.rank.get(fy) + this.rank.get(fx));
    this.f.set(fy, fx);
  }

  numberOfConnectedComponent() {
    let sum = 0;
    for (const [x, fa] of this.f.entries()) {
      if (x === fa) {
        sum++;
      }
    }
    return sum;
  }
}
// @lc code=end

