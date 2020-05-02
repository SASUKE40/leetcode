/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  backtrack(
    ans,
    [],
    nums.sort((a, b) => a - b),
    []
  );
  return ans;
};

function backtrack(list, temp, nums, visited) {
  if (temp.length === nums.length) list.push([...temp]);
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    if (i > 0 && nums[i - 1] === nums[i] && visited[i - 1]) continue;
    visited[i] = true;
    temp.push(nums[i]);
    backtrack(list, temp, nums, visited);
    visited[i] = false;
    temp.pop();
  }
}
// @lc code=end
