/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  let skipS = 0;
  let skipT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (S[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (T[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }
    if (i >= 0 && j >= 0) {
      if (S[i] !== T[j]) {
        return false;
      }
    } else {
      if (i >= 0 || j >= 0) {
        return false;
      }
    }
    i--;
    j--;
  }
  return true;
};
// @lc code=end
