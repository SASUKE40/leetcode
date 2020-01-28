/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === 'I') {
      const nextChar = s[i + 1];
      if (nextChar === 'V') {
        sum += 4;
        i++;
        continue;
      }
      if (nextChar === 'X') {
        sum += 9;
        i++;
        continue;
      }
      sum += 1;
      continue;
    }
    if (char === 'X') {
      const nextChar = s[i + 1];
      if (nextChar === 'L') {
        sum += 40;
        i++;
        continue;
      }
      if (nextChar === 'C') {
        sum += 90;
        i++;
        continue;
      }
      sum += 10;
      continue;
    }
    if (char === 'C') {
      const nextChar = s[i + 1];
      if (nextChar === 'D') {
        sum += 400;
        i++;
        continue;
      }
      if (nextChar === 'M') {
        sum += 900;
        i++;
        continue;
      }
      sum += 100;
      continue;
    }
    if (char === 'V') {
      sum += 5;
    }
    if (char === 'L') {
      sum += 50;
    }
    if (char === 'D') {
      sum += 500;
    }
    if (char === 'M') {
      sum += 1000;
    }
  }
  return sum;
};
// @lc code=end
