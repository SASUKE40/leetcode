/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let pre = 1;
  let cur = 1;
  for (let i = 2; i <= n; i++) {
    let temp = cur;
    cur += pre;
    pre = temp;
  }
  return cur;
};
// @lc code=end
