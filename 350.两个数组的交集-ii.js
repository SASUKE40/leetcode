/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  let ans = [];
  for (const c of nums1) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }
  for (const c of nums2) {
    if (map[c]) {
      ans.push(c);
      map[c]--;
    }
  }
  return ans;
};
// @lc code=end
