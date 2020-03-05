/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.').map(s => parseInt(s));
  let v2 = version2.split('.').map(s => parseInt(s));
  let maxLen = Math.max(v1.length, v2.length);
  for (let i = 0; i < maxLen; i++) {
    const v1Num = v1[i] || 0;
    const v2Num = v2[i] || 0;
    if (v1Num > v2Num) {
      return 1;
    } else if (v1Num < v2Num) {
      return -1;
    }
  }
  return 0;
};
// @lc code=end
