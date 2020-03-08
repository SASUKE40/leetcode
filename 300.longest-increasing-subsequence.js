/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   if (nums.length === 0) return 0;
//   let dp = new Array(nums.length).fill(1);
//   let max = 1;
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//         max = Math.max(dp[i], max);
//       }
//     }
//   }
//   return max;
// };

var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > dp[dp.length - 1]) {
      dp.push(nums[i]);
    } else {
      let l = 0;
      let r = dp.length - 1;
      while (l < r) {
        const mid = ((l + r) / 2) >> 0;
        if (dp[mid] >= nums[i]) {
          r = mid;
        } else {
          l = mid + 1;
        }
      }
      dp[r] = nums[i];
    }
  }
  return dp.length;
};

// @lc code=end
