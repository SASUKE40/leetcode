/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let head = 0;
  let tail = s.length - 1;
  s = s.toLowerCase();
  while (head < tail) {
    while (!isAlpha(s[head])) head++;
    while (!isAlpha(s[tail])) tail--;
    if (s[head] !== s[tail]) return false;
    head++;
    tail--;
  }
  function isAlpha(c) {
    return /[a-z0-9]/.test(c);
  }
  return true;
};
// @lc code=end
