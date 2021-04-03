/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const num = new Array(26).fill(0);
  const n = s.length;
  let maxn = 0, left = 0, right = 0;

  while (right < n) {
    num[s[right].charCodeAt() - 'A'.charCodeAt()]++;
    maxn = Math.max(maxn, num[s[right].charCodeAt() - 'A'.charCodeAt()])
    if (right - left + 1 - maxn > k) {
      num[s[left].charCodeAt() - 'A'.charCodeAt()]--;
      left++;
    }
    right++;
  }
  return right - left;
};
// @lc code=end

