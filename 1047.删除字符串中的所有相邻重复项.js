/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const stk = [];
  for (const ch of S) {
    if (stk.length && stk[stk.length - 1] === ch) {
      stk.pop();
    } else {
      stk.push(ch);
    }
  }
  return stk.join('');
};
// @lc code=end

