/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2, h = new Map()) {
  arr2.forEach((v, i) => h.set(v, i));
  return arr1.sort(
    (a, b) =>
      (h.has(a) ? h.get(a) : 1000 + a) - (h.has(b) ? h.get(b) : 1000 + b)
  );
};
// @lc code=end
