/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var missingNumber = function(nums) {
//   let sum = 0;
//   // [1, 2, 3] - [3, 0, 1];
//   for (let i = 0; i < nums.length; i++) {
//     sum += i + 1 - nums[i];
//   }

//   return sum;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let missing = nums.length;
  // [1, 2, 3] - [3, 0, 1];
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }

  return missing;
};

// @lc code=end
