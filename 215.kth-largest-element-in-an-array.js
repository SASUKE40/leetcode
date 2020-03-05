/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let targetIndex = nums.length - k;

  function select(nums, low, high, k) {
    if (low === high) return nums[low];
    let pivotIndex = low + Math.floor(Math.random() * (high - low));
    let pos = partition(nums, low, high, pivotIndex);
    if (pos === targetIndex) {
      return nums[pos];
    } else if (pos > k) {
      return select(nums, low, pos - 1, k);
    } else {
      return select(nums, pos + 1, high, k);
    }
  }

  function partition(nums, low, high, pivotIndex) {
    let pivotValue = nums[pivotIndex];
    swap(nums, pivotIndex, high);
    let pos = low;
    for (let i = low; i <= high; i++) {
      if (nums[i] < pivotValue) {
        swap(nums, pos++, i);
      }
    }
    swap(nums, pos, high);
    return pos;
  }

  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  return select(nums, 0, nums.length - 1, targetIndex);
};
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

// @lc code=end
