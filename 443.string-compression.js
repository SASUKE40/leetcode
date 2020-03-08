/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      if (count !== 1) {
        let countStr = count + '';
        chars.splice(i + 2 - count, count - 1, ...countStr);
        i = i - count + 2;
        count = 1;
      }
    }
  }
  return chars.length;
};

// @lc code=end
