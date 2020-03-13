/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reverseNumber = 0;
  while (x > reverseNumber) {
    let n = x % 10;
    x = (x / 10) >> 0;
    reverseNumber = reverseNumber * 10 + n;
  }
  return x === reverseNumber || x === (reverseNumber / 10) >> 0;
};
// @lc code=end
