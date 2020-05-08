/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set();
  let max = 0;
  for (const num of nums) {
    set.add(num);
  }
  for (const num of set) {
    if (!set.has(num - 1)) {
      let cur = num;
      let count = 0;
      while (set.has(cur++)) count++;
      max = Math.max(max, count);
    }
  }
  return max;
};
// @lc code=end
