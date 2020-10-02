/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jewelsSet = new Set(J.split(''));
  return S.split('').reduce((prev, val) => {
    return prev + jewelsSet.has(val);
  }, 0);
};
// @lc code=end
