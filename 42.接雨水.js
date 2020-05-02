/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // left to right scanning
  let maxHeight = 0;
  let leftScanningTotal = 0;
  let rightScanningTotal = 0;
  let selfTotal = 0;
  let len = height.length;

  for (let i = 0; i < len; i++) {
    maxHeight = Math.max(maxHeight, height[i]);
    selfTotal += height[i];
    leftScanningTotal += maxHeight;
  }

  // right to left scanning
  maxHeight = 0;
  for (let i = len - 1; i >= 0; i--) {
    maxHeight = Math.max(maxHeight, height[i]);
    rightScanningTotal += maxHeight;
  }
  let square = len * maxHeight;
  return rightScanningTotal + leftScanningTotal - selfTotal - square;
};
// @lc code=end
