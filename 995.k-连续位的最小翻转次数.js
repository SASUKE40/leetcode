/*
 * @lc app=leetcode.cn id=995 lang=javascript
 *
 * [995] K 连续位的最小翻转次数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function (A, K) {
  const n = A.length;
  let ans = 0, revCnt = 0;
  for (let i = 0; i < n; ++i) {
    if (i >= K && A[i - K] > 1) {
      revCnt ^= 1;
      A[i - K] -= 2; // 复原数组元素，若允许修改数组 A，则可以省略
    }
    if (A[i] == revCnt) {
      if (i + K > n) {
        return -1;
      }
      ++ans;
      revCnt ^= 1;
      A[i] += 2;
    }
  }
  return ans;
};
// @lc code=end

