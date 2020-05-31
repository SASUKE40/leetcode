/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let n = Math.max(version1.length, version2.length);
  for (let i = 0; i < n; i++) {
    let a = Number(v1[i]) || 0;
    let b = Number(v2[i]) || 0;
    if (a > b) return 1;
    if (a < b) return -1;
  }
  return 0;
};
// @lc code=end
