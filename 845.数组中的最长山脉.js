/*
 * @lc app=leetcode.cn id=845 lang=javascript
 *
 * [845] 数组中的最长山脉
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
  const n = A.length;
  let ans = 0;
  let left = 0;
  while (left + 2 < n) {
    let right = left + 1;
    if (A[left] < A[left + 1]) {
      while (right + 1 < n && A[right] < A[right + 1]) {
        ++right;
      }
      if (right < n - 1 && A[right] > A[right + 1]) {
        while (right + 1 < n && A[right] > A[right + 1]) {
          ++right;
        }
        ans = Math.max(ans, right - left + 1);
      } else {
        ++right;
      }
    }
    left = right;
  }
  return ans;
};
// @lc code=end
