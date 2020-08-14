/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) stack.push(s[i]);
    else if (s[i] !== map[stack.pop()]) return false;
  }
  return stack.length === 0;
};
// @lc code=end
