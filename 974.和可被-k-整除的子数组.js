/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let map = new Map();
  map.set(0, 1);
  let ans = 0;
  let sum = 0;
  for (const num of A) {
    sum += num;
    // grantee the mod is positive
    let mod = ((sum % K) + K) % K;
    let count = map.get(mod) || 0;
    if (map.has(mod)) {
      ans += count;
    }
    map.set(mod, count + 1);
  }
  return ans;
};
// @lc code=end
