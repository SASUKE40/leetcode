/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const numOfChildren = g.length, numOfCookies = s.length;
  let count = 0;
  for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
    while (j < numOfCookies && g[i] > s[j]) {
      j++;
    }
    if (j < numOfCookies) {
      count++;
    }
  }
  return count;
};
// @lc code=end

