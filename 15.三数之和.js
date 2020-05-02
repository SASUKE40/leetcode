/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let high = nums.length - 1;
      let low = i + 1;
      let sum = 0 - nums[i];
      while (low < high) {
        if (nums[high] + nums[low] === sum) {
          ans.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[high] === nums[high - 1]) high--;
          while (low < high && nums[low] === nums[low + 1]) low++;
          low++;
          high--;
        } else if (nums[high] + nums[low] > sum) {
          high--;
        } else if (nums[high] + nums[low] < sum) {
          low++;
        }
      }
    }
  }
  return ans;
};
// @lc code=end
