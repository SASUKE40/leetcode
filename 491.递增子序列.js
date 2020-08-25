/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = (nums) => {
  const res = [];
  const len = nums.length;

  const dfs = (start, path) => {
    if (start == len) {
      if (path.length >= 2) {
        res.push(path.slice());
        return;
      }
    }
    path.push(nums[start]);
    for (let i = start + 1; i <= len; i++) {
      const prev = nums[start];
      const cur = nums[i];
      if (i < len && cur == prev) {
        dfs(i, path);
        break;
      } else if (i == len || prev < cur) {
        dfs(i, path);
      }
    }
    path.pop();
  };
  for (let i = 0; i < len; i++) {
    dfs(i, []);
  }
  return res;
};
// @lc code=end
