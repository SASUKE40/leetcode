/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  const n = nums.length;
  let cnt = 0;
  for (let i = 0; i < n - 1; ++i) {
    const x = nums[i], y = nums[i + 1];
    if (x > y) {
      cnt++;
      if (cnt > 1) {
        return false;
      }
      if (i > 0 && y < nums[i - 1]) {
        nums[i + 1] = x;
      }
    }
  }
  return true;
};
// @lc code=end

