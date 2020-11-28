/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const countAB = new Map();
  A.forEach((u) =>
    B.forEach((v) => countAB.set(u + v, (countAB.get(u + v) || 0) + 1))
  );
  let ans = 0;
  for (let u of C) {
    for (let v of D) {
      if (countAB.has(-u - v)) {
        ans += countAB.get(-u - v);
      }
    }
  }
  return ans;
};
// @lc code=end
