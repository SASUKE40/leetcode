/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let inc = true, dec = true;
  const n = A.length;
  for (let i = 0; i < n - 1; ++i) {
    if (A[i] > A[i + 1]) {
      inc = false;
    }
    if (A[i] < A[i + 1]) {
      dec = false;
    }
  }
  return inc || dec;
};
// @lc code=end

