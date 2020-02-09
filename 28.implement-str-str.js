/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let i = 0,
    j = 0,
    count = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      j++;
      count++;
    } else {
      j = 0;
      i = i - count;
      count = 0;
    }
    i++;
  }
  if (count === needle.length) {
    return i - count;
  } else {
    return -1;
  }
};
// @lc code=end
