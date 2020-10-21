/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const n = name.length;
  const m = typed.length;
  let i = 0;
  let j = 0;
  while (j < m) {
    if (i < n && name[i] === typed[j]) {
      i++;
      j++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
    } else {
      return false;
    }
  }
  return i === n;
};
// @lc code=end
