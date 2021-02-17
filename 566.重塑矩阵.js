/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;
  if (m * n != r * c) {
    return nums;
  }

  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let x = 0; x < m * n; ++x) {
    ans[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n];
  }
  return ans;
};
// @lc code=end

