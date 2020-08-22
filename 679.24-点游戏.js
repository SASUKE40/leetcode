/*
 * @lc app=leetcode.cn id=679 lang=javascript
 *
 * [679] 24 点游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function (nums) {
  const TARGET = 24;
  const EPSILON = 1e-6;
  const ADD = 0;
  const MUL = 1;
  const SUB = 2;
  const DIV = 3;
  function solve(list) {
    if (list.length === 0) {
      return false;
    }
    if (list.length === 1) {
      return Math.abs(list[0] - TARGET) < EPSILON;
    }
    const size = list.length;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i !== j) {
          let list2 = [];
          for (let k = 0; k < size; k++) {
            if (k !== i && k !== j) {
              list2.push(list[k]);
            }
          }
          for (let k = 0; k < 4; k++) {
            if (k < 2 && i > j) {
              continue;
            }
            if (k === ADD) {
              list2.push(list[i] + list[j]);
            } else if (k === MUL) {
              list2.push(list[i] * list[j]);
            } else if (k === SUB) {
              list2.push(list[i] - list[j]);
            } else if (k === DIV) {
              if (Math.abs(list[j]) < EPSILON) {
                continue;
              } else {
                list2.push(list[i] / list[j]);
              }
            }
            if (solve(list2)) {
              return true;
            }
            list2.pop();
          }
        }
      }
    }
    return false;
  }
  let list = [];
  for (const num of nums) {
    list.push(num);
  }
  return solve(list);
};
// @lc code=end
