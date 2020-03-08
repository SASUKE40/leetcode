/*
 * @lc app=leetcode id=365 lang=javascript
 *
 * [365] Water and Jug Problem
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (z === 0) return true;
  if (x + y < z) return false;
  let a = gcd(x, y);
  console.log('canMeasureWater -> a', a);

  return z % a === 0;
};

function gcd(x, y) {
  return y === 0 ? x : gcd(y, x % y);
}

console.log(canMeasureWater(3, 5, 4));

// @lc code=end
