/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let max = A[0];
  let ans = 0;
  for (let i = 1; i < A.length; i++) {
    ans = Math.max(ans, max + A[i] - i);
    max = Math.max(max, A[i] + i);
  }
  return ans;
};
// @lc code=end
