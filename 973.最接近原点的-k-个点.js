/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  points.sort((a, b) => {
    return a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]);
  });
  return points.slice(0, K);
};
// @lc code=end
