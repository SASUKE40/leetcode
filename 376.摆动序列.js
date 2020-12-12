/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }
  let prevdiff = nums[1] - nums[0];
  let ret = prevdiff !== 0 ? 2 : 1;
  for (let i = 2; i < n; i++) {
    const diff = nums[i] - nums[i - 1];
    if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
      ret++;
      prevdiff = diff;
    }
  }
  return ret;
};
// @lc code=end

