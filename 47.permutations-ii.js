/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const list = [];
  backtrack(
    list,
    nums.sort((a, b) => a - b),
    [],
    []
  );
  return list;
};

function backtrack(list, nums, tempList, visited) {
  if (tempList.length === nums.length) return list.push([...tempList]);
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue;
    visited[i] = true;
    tempList.push(nums[i]);
    backtrack(list, nums, tempList, visited);
    visited[i] = false;
    tempList.pop();
  }
}
// @lc code=end
