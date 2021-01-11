/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const fa = new Array(100010).fill(0);

  const find = (x) => {
    return x === fa[x] ? x : fa[x] = find(fa[x]);
  }

  const n = s.length;
  for (let i = 0; i < n; i++) {
    fa[i] = i;
  }
  for (let i = 0; i < pairs.length; ++i) {
    const x = pairs[i][0], y = pairs[i][1];
    const ux = find(x), uy = find(y);
    if (ux ^ uy) {
      fa[ux] = uy;
    }
  }

  const vec = new Array(n).fill(0).map(() => new Array());
  for (let i = 0; i < n; i++) {
    fa[i] = find(i);
    vec[fa[i]].push(s[i]);
  }

  for (let i = 0; i < n; ++i) {
    if (vec[i].length > 0) {
      vec[i].sort((a, b) => a.charCodeAt() - b.charCodeAt());
    }
  }
  const p = new Array(n).fill(0);
  let ans = [];
  for (let i = 0; i < n; ++i) {
    ans.push('1');
  }

  for (let i = 0; i < n; ++i) {
    ans[i] = vec[fa[i]][p[fa[i]]];
    p[fa[i]]++;
  }

  return ans.join('');
};
// @lc code=end

