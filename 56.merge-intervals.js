/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    let curr = intervals[i];
    let next = intervals[i + 1];
    if (intersected(curr, next)) {
      intervals[i] = undefined;
      intervals[i + 1] = mergeTow(curr, next);
    }
  }
  return intervals.filter(q => q);
};

function intersected(a, b) {
  if (a[0] > b[1] || a[1] < b[0]) return false;
  return true;
}

function mergeTow(a, b) {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}
// @lc code=end
