/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let i = 0;
  while (i < n) {
    let sumOfGas = 0,
      sumOfCost = 0;
    let cnt = 0;
    while (cnt < n) {
      const j = (i + cnt) % n;
      sumOfGas += gas[j];
      sumOfCost += cost[j];
      if (sumOfCost > sumOfGas) {
        break;
      }
      cnt++;
    }
    if (cnt === n) {
      return i;
    } else {
      i = i + cnt + 1;
    }
  }
  return -1;
};
// @lc code=end
