/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  function isSquare(x) {
    let sq = Math.sqrt(x) >> 0;
    return sq * sq === x;
  }
  while ((n & 3) === 0) n >>= 2;
  if ((n & 7) === 7) return 4;
  if (isSquare(n)) return 1;
  for (let i = 1; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (isSquare(n - i * i)) return 2;
  }
  return 3;
};
// @lc code=end
