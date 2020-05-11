/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) return quickPow(x, n);
  return 1 / quickPow(x, -n);
};

function quickPow(x, n) {
  if (n === 0) return 1;
  let y = quickPow(x, Math.floor(n / 2));
  return n % 2 === 0 ? y * y : y * y * x;
}

// @lc code=end
