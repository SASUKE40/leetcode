/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char.charCodeAt(0) - 97]) {
      map[char.charCodeAt(0) - 97] += 1;
    } else {
      map[char.charCodeAt(0) - 97] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char.charCodeAt(0) - 97] === 1) {
      return i;
    }
  }
  return -1;
};

// @lc code=end
