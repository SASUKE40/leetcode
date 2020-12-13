/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
};
// @lc code=end

