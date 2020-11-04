/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let left = newInterval[0];
  let right = newInterval[1];
  let placed = false;
  let ansList = [];
  for (const interval of intervals) {
    if (interval[0] > right) {
      if (!placed) {
        ansList.push([left, right]);
        placed = true;
      }
      ansList.push(interval);
    } else if (interval[1] < left) {
      ansList.push(interval);
    } else {
      left = Math.min(left, interval[0]);
      right = Math.max(right, interval[1]);
    }
  }
  if (!placed) {
    ansList.push([left, right]);
  }
  let ans = new Array(ansList.length);
  for (let i = 0; i < ansList.length; i++) {
    ans[i] = ansList[i];
  }
  return ans;
};
// @lc code=end
