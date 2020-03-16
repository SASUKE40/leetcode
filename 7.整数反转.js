/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  let digit = 0;
  if (x < 0) return -reverse(-x);
  while (x > 0) {
    digit = x % 10;
    x = (x / 10) >> 0;
    result = result * 10 + digit;
  }
  if (result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
};

// @lc code=end
