/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let count = 0;
  let needs = {};
  let windows = {};
  let start = -1;
  let minLength = Infinity;
  [...t].forEach((c) => (needs[c] ? needs[c]++ : (needs[c] = 1)));
  let keyLen = Object.keys(needs).length;
  while (r < s.length) {
    let c1 = s[r++];
    windows[c1] ? windows[c1]++ : (windows[c1] = 1);
    if (needs[c1] === windows[c1]) count++;
    while (count === keyLen) {
      if (r - l < minLength) {
        start = l;
        minLength = r - l;
      }
      let c2 = s[l++];
      if (windows[c2]-- === needs[c2]) count--;
    }
  }
  return start === -1 ? '' : s.substr(start, minLength);
};
// @lc code=end
