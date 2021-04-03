/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const bits = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    bits[i] = bits[i & (i - 1)] + 1;
  }
  return bits;
};
// @lc code=end

