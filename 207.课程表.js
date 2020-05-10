/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let indegress = new Array(numCourses).fill(0);
  let ajacency = {};
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    ajacency[i] = [];
  }
  for (const pre of prerequisites) {
    indegress[pre[0]]++;
    ajacency[pre[1]].push(pre[0]);
  }
  for (let i = 0; i < numCourses; i++) {
    if (indegress[i] === 0) queue.push(i);
  }
  while (queue.length > 0) {
    let cur = queue.shift();
    numCourses--;
    for (const pre of ajacency[cur]) {
      if (--indegress[pre] === 0) queue.push(pre);
    }
  }
  return numCourses === 0;
};
// @lc code=end
