/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0;
  let map = new Map();
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(map.get(s[i]) || 0, j);
    }
    ans = Math.max(ans, i - j + 1);
    map.set(s[i], i + 1);
  }
  return ans;
};
// @lc code=end
