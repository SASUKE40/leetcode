/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const n = s.length;
  let map = {};
  for (let i = 0; i < n; i++) {
    if (map[s[i]]) {
      if (map[s[i]] !== t[i]) return false;
    } else {
      if (Object.values(map).includes(t[i])) return false;
      map[s[i]] = t[i];
    }
  }
  return true;
};
// @lc code=end
