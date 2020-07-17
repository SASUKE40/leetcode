/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const len = nums.length;
  if (len === 0) return nums;
  const counts = new Array(len);
  const sorted = [];
  for (let i = len - 1; i >= 0; i--) {
    const index = findIndex(sorted, nums[i]);
    sorted.splice(index, 0, nums[i]);
    counts[i] = index;
  }
  return counts;
};

function findIndex(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  if (arr[lo] < target) return lo + 1;
  return lo;
}
// @lc code=end
