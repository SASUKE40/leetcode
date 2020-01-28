/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let trimmed = str.trim();
  let parsed = parseInt(trimmed, 10);
  if (isNaN(parsed)) {
    return 0;
  } else if (parsed >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1;
  } else if (parsed <= Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else {
    return parsed;
  }
};
// @lc code=end
