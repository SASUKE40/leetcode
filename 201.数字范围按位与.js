/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  while (m < n) {
    // 抹去最右边的 1
    n = n & (n - 1);
  }
  return n;
};
// @lc code=end
