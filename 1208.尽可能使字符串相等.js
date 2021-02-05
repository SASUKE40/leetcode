/*
 * @lc app=leetcode.cn id=1208 lang=javascript
 *
 * [1208] 尽可能使字符串相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  const n = s.length;
  const diff = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    diff[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
  }
  let maxLength = 0;
  let start = 0, end = 0;
  let sum = 0;
  while (end < n) {
    sum += diff[end];
    while (sum > maxCost) {
      sum -= diff[start];
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }
  return maxLength;
};
// @lc code=end

