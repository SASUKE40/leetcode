/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  // 滑动窗口大小为 n-k
  const windowSize = n - k;
  // 选前 n-k 个作为初始值
  let sum = 0;
  for (let i = 0; i < windowSize; ++i) {
    sum += cardPoints[i];
  }
  let minSum = sum;
  for (let i = windowSize; i < n; ++i) {
    // 滑动窗口每向右移动一格，增加从右侧进入窗口的元素值，并减少从左侧离开窗口的元素值
    sum += cardPoints[i] - cardPoints[i - windowSize];
    minSum = Math.min(minSum, sum);
  }
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += cardPoints[i];
  }
  return totalSum - minSum;
};
// @lc code=end

