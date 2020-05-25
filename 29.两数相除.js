/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let res = 0;
  let sign = dividend > 0 ? (divisor > 0 ? '' : '-') : divisor > 0 ? '-' : '';
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let strdiv = String(dividend);
  let quot = '',
    remainder = '';
  for (let i = 0; i < strdiv.length; i++) {
    remainder += strdiv[i];
    let temp = 0;
    let m = parseInt(remainder);
    while (divisor <= m) {
      m = m - divisor;
      temp++;
    }
    quot += temp;
    remainder = String(m);
  }
  res = parseInt(sign + quot);
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31))
    return Math.pow(2, 31) - 1;
  return res;
};
// @lc code=end
