/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occur = new Map();
  for (const x of arr) {
    if (occur.has(x)) {
      occur.set(x, occur.get(x) + 1);
    } else {
      occur.set(x, 1);
    }
  }
  const times = new Set();
  for (const [key, value] of occur) {
    times.add(value);
  }
  return times.size === occur.size;
};
// @lc code=end
