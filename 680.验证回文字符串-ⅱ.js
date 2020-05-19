/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let chance = 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      if (left + 1 == right) {
        return true;
      }
      if (chance) {
        chance--;
        if (s[left + 1] === s[right] && s[left + 2] === s[right - 1]) {
          left++;
        } else if (s[left] === s[right - 1] && s[left + 1] === s[right - 2]) {
          right--;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end
