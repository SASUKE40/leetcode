/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let s1 = (s + s).slice(1, -1);
  return s1.indexOf(s) != -1;
};
// @lc code=end
