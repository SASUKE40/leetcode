/*
 * @lc app=leetcode id=650 lang=javascript
 *
 * [650] 2 Keys Keyboard
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var minSteps = function(n) {
//   let dp = new Array(n + 5).fill(0);
//   dp[1] = 0;
//   dp[2] = 2;
//   dp[3] = 3;
//   dp[4] = 4;
//   dp[5] = 5;
//   for (let i = 6; i <= n; i++) {
//     let half = i / 2;
//     dp[i] = i;
//     for (let j = 2; j <= half; j++) {
//       if (i % j === 0) {
//         dp[i] = Math.min(dp[i], dp[j] + i / j);
//       }
//     }
//   }
//   return dp[n];
// };

var minSteps = function(n) {
  let d = 2;
  let ans = 0;
  while (n > 1) {
    while (n % d === 0) {
      n /= d;
      ans += d;
    }
    d++;
  }
  return ans;
};
// @lc code=end
