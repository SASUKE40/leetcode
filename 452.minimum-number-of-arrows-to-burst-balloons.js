/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length === 0) return 0;
  points = points.sort(([x1, y1], [x2, y2]) => x1 - x2);
  console.log('findMinArrowShots -> points', points);
  let sum = 1;
  let minRight = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (minRight >= points[i][0]) {
      minRight = Math.min(minRight, points[i][1]);
    } else {
      minRight = points[i][1];
      sum++;
    }
  }
  return sum;
};

// @lc code=end
