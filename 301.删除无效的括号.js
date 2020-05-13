/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  function isValid(s) {
    let count = 0;
    for (const c of s) {
      if (c === '(') count++;
      else if (c === ')') count--;
      if (count < 0) return false;
    }
    return count === 0;
  }
  let level = new Set();
  level.add(s);
  while (true) {
    let valid = [];
    for (const item of level.values()) {
      if (isValid(item)) {
        valid.push(item);
      }
    }
    if (valid.length > 0) return valid;
    nextLevel = new Set();
    for (const item of level) {
      for (let i = 0; i < item.length; i++) {
        if (item[i] === '(' || item[i] === ')')
          nextLevel.add(
            item.substring(0, i) + item.substring(i + 1, item.length)
          );
      }
    }
    level = nextLevel;
  }
};
// @lc code=end
