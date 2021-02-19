/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  const n = A.length;
  let left = 0, lsum = 0, rsum = 0;
  let ans = 0;
  for (let right = 0; right < n; ++right) {
    rsum += 1 - A[right];
    while (lsum < rsum - K) {
      lsum += 1 - A[left];
      ++left;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
// @lc code=end

