/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = [T.length - 1];
  let ans = new Array(T.length).fill(0);
  for (let i = T.length - 2; i >= 0; i--) {
    while (T[i] >= T[stack[stack.length - 1]]) stack.pop();
    ans[i] = stack.length > 0 ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }
  return ans;
};
// @lc code=end
