/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let list = [];
  candidates = candidates.sort((a, b) => a - b);
  function backtrack(value, tempList, start) {
    if (value === 0) {
      list.push([...tempList]);
      return;
    }
    if (value < 0) return;
    for (let i = start; i < candidates.length; i++) {
      let minus = value - candidates[i];
      if (minus < 0) break;
      tempList.push(candidates[i]);
      backtrack(minus, tempList, i);
      tempList.pop();
    }
  }
  backtrack(target, [], 0);
  return list;
};
// @lc code=end
