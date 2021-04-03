/*
 * @lc app=leetcode.cn id=992 lang=javascript
 *
 * [992] K 个不同整数的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
  const n = A.length;
  const num1 = new Array(n + 1).fill(0);
  const num2 = new Array(n + 1).fill(0);
  let tot1 = 0, tot2 = 0;
  let left1 = 0, left2 = 0, right = 0;
  let ret = 0;
  while (right < n) {
    if (num1[A[right]] == 0) {
      tot1++;
    }
    num1[A[right]]++;
    if (num2[A[right]] == 0) {
      tot2++;
    }
    num2[A[right]]++;
    while (tot1 > K) {
      num1[A[left1]]--;
      if (num1[A[left1]] == 0) {
        tot1--;
      }
      left1++;
    }
    while (tot2 > K - 1) {
      num2[A[left2]]--;
      if (num2[A[left2]] == 0) {
        tot2--;
      }
      left2++;
    }
    ret += left2 - left1;
    right++;
  }
  return ret;
};
// @lc code=end

