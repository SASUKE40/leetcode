/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  if (!s) return '';
  return s
    .split(' ')
    .filter(s => s)
    .reverse()
    .join(' ');
};

// @lc code=end
