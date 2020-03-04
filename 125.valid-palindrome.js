/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (/[a-z|A-Z|0-9]/.test(char)) {
      char = char.toLowerCase();
      temp.push(char);
    }
  }
  let ltr = temp.join('');
  let rtl = temp.reverse().join('');
  return ltr === rtl;
};
// @lc code=end
