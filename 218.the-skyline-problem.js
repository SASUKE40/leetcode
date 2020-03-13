/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  let set = new Set();
  for (let [l, r, h] of buildings) {
    set.add(l);
    set.add(r);
  }
  let points = [...set].sort((a, b) => a - b);
  let n = buildings.length;
  let res = [[-1, 0]];
  for (let p of points) {
    let i = 0;
    let height = 0;
    while (i < n && buildings[i][0] <= p) {
      if (buildings[i][1] > p) {
        height = Math.max(height, buildings[i][2]);
      }
      i++;
    }
    if (height === res[res.length - 1][1]) {
      continue;
    }
    res.push([p, height]);
  }
  return res.slice(1);
};
// @lc code=end
