/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// var convertToTitle = function(n) {
//   let s = '';
//   function helper(n) {
//     if (n === 0) return;
//     let curChar = (n - 1) % 26;
//     s = String.fromCharCode(65 + curChar) + s;
//     let nextN = Math.floor((n - 1) / 26);
//     helper(nextN);
//   }
//   helper(n);
//   return s;
// };

var convertToTitle = function(n) {
  return n === 0
    ? ''
    : convertToTitle(Math.floor(--n / 26)) + String.fromCharCode(65 + (n % 26));
};

// @lc code=end
