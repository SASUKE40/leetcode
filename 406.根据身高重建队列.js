/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((person1, person2) => {
    if (person1[0] !== person2[0]) {
      return person2[0] - person1[0];
    } else {
      return person1[1] - person2[1];
    }
  });
  const ans = [];
  for (const person of people) {
    ans.splice(person[1], 0, person);
  }
  return ans;
};
// @lc code=end
