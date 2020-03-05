/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * Thanks @泠鸢陌上
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums === null) return 0;
  if (nums.length === 1) return nums[0];
  let dp1 = new Array(nums.length + 1).fill(0);
  let dp2 = new Array(nums.length + 1).fill(0);
  dp1[1] = nums[0];

  // input: [2,3,2]
  // dp1: [0,2,3,3]
  // dp2: [0,0,3,3]
  for (let i = 1; i < nums.length; i++) {
    // rob first house
    dp1[i + 1] = Math.max(dp1[i], dp1[i - 1] + nums[i]);
    //rob sencond house
    dp2[i + 1] = Math.max(dp2[i], dp2[i - 1] + nums[i]);
  }
  return Math.max(dp1[dp1.length - 2], dp2[dp2.length - 1]);
};

// @lc code=end
