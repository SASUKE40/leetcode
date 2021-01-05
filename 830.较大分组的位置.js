/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const ret = [];
  const n = s.length;
  let num = 1;
  for (let i = 0; i < n; i++) {
    if (i === n - 1 || s[i] !== s[i + 1]) {
      if (num >= 3) {
        ret.push([i - num + 1, i]);
      }
      num = 1;
    } else {
      num++;
    }
  }
  return ret;
};
// @lc code=end

