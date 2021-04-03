/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  let total = 0;
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      total += customers[i];
    }
  }
  let increase = 0;
  for (let i = 0; i < X; i++) {
    increase += customers[i] * grumpy[i];
  }
  let maxIncrease = increase;
  for (let i = X; i < n; i++) {
    increase = increase - customers[i - X] * grumpy[i - X] + customers[i] * grumpy[i];
    maxIncrease = Math.max(maxIncrease, increase);
  }
  return total + maxIncrease;
};
// @lc code=end

