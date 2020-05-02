/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let minnums = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > minnums[minnums.length - 1]) {
      minnums.push(nums[i]);
    } else {
      let low = 0;
      let high = minnums.length - 1;
      while (low < high) {
        let mid = (low + high) >> 1;
        if (nums[i] > minnums[mid]) low = mid + 1;
        else high = mid;
      }
      minnums[high] = nums[i];
    }
  }
  return minnums.length;
};
// @lc code=end
