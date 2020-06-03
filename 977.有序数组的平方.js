/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let ans = [];
  let left = 0;
  let right = A.length - 1;
  while (left <= right) {
    if (Math.abs(A[left]) > Math.abs(A[right])) {
      ans.unshift(A[left] ** 2);
      left++;
    } else {
      ans.unshift(A[right] ** 2);
      right--;
    }
  }
  return ans;
};
// @lc code=end
