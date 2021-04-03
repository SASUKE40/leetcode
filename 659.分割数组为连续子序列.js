/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const countMap = new Map();
  const endMap = new Map();
  for (const x of nums) {
    const count = (countMap.get(x) || 0) + 1;
    countMap.set(x, count);
  }
  for (const x of nums) {
    const count = countMap.get(x) || 0;
    if (count > 0) {
      const prevEndCount = endMap.get(x - 1) || 0;
      if (prevEndCount > 0) {
        countMap.set(x, count - 1);
        endMap.set(x - 1, prevEndCount - 1);
        endMap.set(x, (endMap.get(x, 0) || 0) + 1);
      } else {
        const count1 = countMap.get(x + 1, 0);
        const count2 = countMap.get(x + 2, 0);
        if (count1 > 0 && count2 > 0) {
          countMap.set(x, count - 1);
          countMap.set(x + 1, count1 - 1);
          countMap.set(x + 2, count2 - 1);
          endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
// @lc code=end

