/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const n = s1.length, m = s2.length;
  if (n > m) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < n; ++i) {
    --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
  }
  let left = 0;
  for (let right = 0; right < m; ++right) {
    const x = s2[right].charCodeAt() - 'a'.charCodeAt();
    ++cnt[x];
    while (cnt[x] > 0) {
      --cnt[s2[left].charCodeAt() - 'a'.charCodeAt()];
      ++left;
    }
    if (right - left + 1 === n) {
      return true;
    }
  }
  return false;
};
// @lc code=end

