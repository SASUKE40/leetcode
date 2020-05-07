/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let list = [];
  function backtrack(i, temp) {
    list.push([...temp]);
    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j]);
      backtrack(j + 1, temp);
      temp.pop();
    }
  }
  backtrack(0, []);
  return list;
};
// @lc code=end
