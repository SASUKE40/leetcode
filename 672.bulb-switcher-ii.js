/*
 * @lc app=leetcode id=672 lang=javascript
 *
 * [672] Bulb Switcher II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipLights = function(n, m) {
  if (m === 0) {
    return 1;
  }
  n = Math.min(n, 3);
  if (n === 3) {
    if (m === 1) {
      return 4;
    }
    if (m === 2) {
      return 7;
    }
    if (m >= 3) {
      return 8;
    }
  }
  if (n === 2) {
    if (m === 1) {
      return 3;
    } else {
      return 4;
    }
  }
  if (n === 1) {
    return 2;
  }
};
// @lc code=end
