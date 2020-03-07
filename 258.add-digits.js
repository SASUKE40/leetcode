/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
  // 1 2 3 4 5 6 7 8 9  1  2  3  4  5  6  7  8  9  1
  return ((num - 1) % 9) + 1;
};
// @lc code=end
