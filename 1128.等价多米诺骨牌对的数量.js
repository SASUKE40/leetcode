/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const num = new Array(100).fill(0);
  let ret = 0;
  for (const domino of dominoes) {
    const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
    ret += num[val];
    num[val]++;
  }
  return ret;
};
// @lc code=end

