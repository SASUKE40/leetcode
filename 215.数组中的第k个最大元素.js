/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let targetIndex = nums.length - k;
  function select(nums, low, high, k) {
    let pivotIndex = (low + Math.random(high - low)) >> 0;
    let pos = partition(nums, low, high, pivotIndex);
    if (pos === k) {
      return nums[pos];
    }
    if (pos < k) return select(nums, pos + 1, high, k);
    else return select(nums, low, pos, k);
  }
  function partition(nums, low, high, pivotIndex) {
    let pivotValue = nums[pivotIndex];
    let pos = low;
    swap(nums, pivotIndex, high);
    for (let i = low; i <= high; i++) {
      if (nums[i] < pivotValue) {
        swap(nums, i, pos++);
      }
    }
    swap(nums, pos, high);
    return pos;
  }
  function swap(nums, a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }
  return select(nums, 0, nums.length - 1, targetIndex);
};
// @lc code=end
