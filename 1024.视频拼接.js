/*
 * @lc app=leetcode.cn id=1024 lang=javascript
 *
 * [1024] 视频拼接
 */

// @lc code=start
/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function (clips, T) {
  const dp = new Array(T + 1).fill(Number.MAX_SAFE_INTEGER - 1);
  dp[0] = 0;
  for (let i = 1; i <= T; i++) {
    for (const clip of clips) {
      if (clip[0] < i && i <= clip[1]) {
        dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
      }
    }
  }
  return dp[T] === Number.MAX_SAFE_INTEGER - 1 ? -1 : dp[T];
};
// @lc code=end
