/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */

var addToArrayForm = function (A, K) {
  const res = [];
  const n = A.length;
  for (let i = n - 1; i >= 0 || K > 0; --i, K = Math.floor(K / 10)) {
    if (i >= 0) {
      K += A[i];
    }
    res.push(K % 10);
  }
  res.reverse();
  return res;
};
// @lc code=end

