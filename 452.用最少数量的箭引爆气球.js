/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function (points) {
  if (!points.length) {
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1];
  let ans = 1;
  for (let balloon of points) {
    if (balloon[0] > pos) {
      pos = balloon[1];
      ans++;
    }
  }
  return ans;
};
// @lc code=end
