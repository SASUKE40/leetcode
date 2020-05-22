/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  /**
   * 感谢 @最初の声は 的讲解
   */
  const n = s1.length;
  const m = s2.length;
  if (n !== m) return false;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Array(n + 1).fill(false);
    }
  }
  /**
   * 初始化单个字符匹配的结果
   */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][1] = s1[i] === s2[j];
    }
  }
  // [2, n] 长度匹配
  for (let len = 2; len <= n; len++) {
    // 注意边界，每 len 段都要进行匹配，所以边界为 [0, n - len]
    for (let i = 0; i < n - len + 1; i++) {
      for (let j = 0; j < n - len + 1; j++) {
        // 已经记录过的值就无需再改写
        for (let k = 1; k < len && !dp[i][j][len]; k++) {
          // 两种情况：S1 match T1 && S2 match T2 || S1 match T2 && S2 match T1
          // i: S起始点
          // j: T起始点
          // k: 截取点
          dp[i][j][len] =
            (dp[i][j][k] && dp[i + k][j + k][len - k]) ||
            (dp[i][j + len - k][k] && dp[i + k][j][len - k]);
        }
      }
    }
  }
  // 代表从 S0 T0 开始，长度为 n 的解
  return dp[0][0][n];
};
// @lc code=end
