/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let target_3 = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let target_2 = target_3 - nums[j];
      let front = j + 1;
      let back = nums.length - 1;
      while (front < back) {
        let two_sum = nums[front] + nums[back];
        if (target_2 - two_sum === 0) {
          res.push([nums[i], nums[j], nums[front], nums[back]]);
          let frontNum = nums[front];
          let backNum = nums[back];
          while (front < back && nums[front] === frontNum) front++;
          while (front < back && nums[back] === backNum) back--;
        }
        if (two_sum < target_2) front++;
        if (two_sum > target_2) back--;
      }
      while (j + 1 < nums.length && nums[j + 1] === nums[j]) j++;
    }
    while (i + 1 < nums.length && nums[i + 1] === nums[i]) i++;
  }
  return res;
};
// @lc code=end
