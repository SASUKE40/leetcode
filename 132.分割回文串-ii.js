/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length;
  const g = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      g[i][j] = s[i] == s[j] && g[i + 1][j - 1];
    }
  }

  const f = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < n; ++i) {
    if (g[0][i]) {
      f[i] = 0;
    } else {
      for (let j = 0; j < i; ++j) {
        if (g[j + 1][i]) {
          f[i] = Math.min(f[i], f[j] + 1);
        }
      }
    }
  }

  return f[n - 1];
};
// @lc code=end

