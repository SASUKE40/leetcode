/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  if (N === 1) {
    return 1;
  } else if (N === 2) {
    return 2;
  } else if (N === 3) {
    return 6;
  } else if (N === 4) {
    return 7;
  }

  if (N % 4 === 0) {
    return N + 1;
  } else if (N % 4 <= 2) {
    return N + 2;
  } else {
    return N - 1;
  }
};
// @lc code=end

