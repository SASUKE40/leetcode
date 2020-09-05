/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let ans = [];
  let used = new Array(n + 1).fill(1);
  const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  k--;
  for (let i = 1; i <= n; i++) {
    let kLargest = Math.floor(k / factorial[n - i]) + 1;
    for (let j = 1; j <= n; j++) {
      kLargest -= used[j];
      if (kLargest === 0) {
        ans.push(j);
        used[j] = 0;
        break;
      }
    }
    k %= factorial[n - i];
  }
  return ans.join('');
};

// @lc code=end
