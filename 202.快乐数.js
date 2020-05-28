/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let cycleList = [4, 6, 37, 58, 89, 145, 42, 20];
  function getNext(n) {
    let s = 0;
    while (n > 0) {
      let d = n % 10;
      n = (n / 10) >> 0;
      s += d ** 2;
    }
    return s;
  }
  while (n != 1 && !cycleList.includes(n)) n = getNext(n);
  return n === 1;
};
// @lc code=end
