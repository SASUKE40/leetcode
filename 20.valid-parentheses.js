/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
    s = s
      .replace('()', '')
      .replace('[]', '')
      .replace('{}', '');
  }
  return s === '';
};

// @lc code=end
