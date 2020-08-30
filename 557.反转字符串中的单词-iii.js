/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let list = [];
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      list.push(str);
      str = '';
    } else str = s[i] + str;
  }
  list.push(str);
  return list.join(' ');
};
// @lc code=end
