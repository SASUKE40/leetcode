/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  const N = A.length;
  let i = 0;
  while (i + 1 < N && A[i] < A[i + 1]) {
    i++;
  }
  if (i === 0 || i === N - 1) {
    return false;
  }
  while (i + 1 < N && A[i] > A[i + 1]) {
    i++;
  }
  return i === N - 1;
};
// @lc code=end
