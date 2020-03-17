/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let area;
    if (height[left] < height[right]) {
      area = (right - left) * height[left];
      left++;
    } else {
      area = (right - left) * height[right];
      right--;
    }
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};
// @lc code=end
