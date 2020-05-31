/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  let dp = new Array(K + 1);
  for (let i = 0; i <= K; i++) {
    dp[i] = new Array(N + 1).fill(Infinity);
  }
  for (let i = 0; i <= N; i++) {
    dp[0][i] = 0;
    dp[1][i] = i;
  }
  for (let i = 1; i <= K; i++) {
    dp[i][0] = 0;
    dp[i][1] = 1;
  }
  for (let i = 2; i <= K; i++) {
    for (let j = 2; j <= N; j++) {
      let l = 1;
      let r = j;
      while (l < r) {
        let mid = Math.ceil((l + r) / 2);
        let breakCount = dp[i - 1][mid - 1];
        let breakNotCount = dp[i][j - mid];
        if (breakCount > breakNotCount) {
          r = mid - 1;
        } else {
          l = mid;
        }
      }
      dp[i][j] = Math.min(
        dp[i][j],
        Math.max(dp[i - 1][l - 1], dp[i][j - l]) + 1
      );
    }
  }
  return dp[K][N];
};

// @lc code=end
