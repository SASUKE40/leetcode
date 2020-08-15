/*
 * @lc app=leetcode.cn id=546 lang=javascript
 *
 * [546] 移除盒子
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  const n = boxes.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Array(n).fill(0);
    }
  }
  return calculatePoints(boxes, dp, 0, n - 1, 0);
};

function calculatePoints(boxes, dp, l, r, k) {
  if (l > r) {
    return 0;
  }
  if (dp[l][r][k] !== 0) {
    return dp[l][r][k];
  }
  while (r > l && boxes[r] === boxes[r - 1]) {
    r--;
    k++;
  }
  dp[l][r][k] = calculatePoints(boxes, dp, l, r - 1, 0) + (k + 1) * (k + 1);
  for (let i = l; i < r; i++) {
    if (boxes[i] === boxes[r]) {
      dp[l][r][k] = Math.max(
        dp[l][r][k],
        calculatePoints(boxes, dp, l, i, k + 1) +
          calculatePoints(boxes, dp, i + 1, r - 1, 0)
      );
    }
  }
  return dp[l][r][k];
}
// @lc code=end
