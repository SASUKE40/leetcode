/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
var sortArrayByParityII = function (A) {
  const n = A.length;
  let j = 1;
  for (let i = 0; i < n; i += 2) {
    if (A[i] & 1) {
      while (A[j] & 1) {
        j += 2;
      }
      swap(A, i, j);
    }
  }
  return A;
};
// @lc code=end
