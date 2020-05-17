/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let edges = new Array(numCourses);
  let indeg = new Array(numCourses).fill(0);
  let queue = [];
  let result = [];
  for (let i = 0; i < edges.length; i++) {
    edges[i] = [];
  }
  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
    ++indeg[info[0]];
  }
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) queue.push(i);
  }
  while (queue.length > 0) {
    let u = queue.shift();
    result.push(u);
    for (const v of edges[u]) {
      --indeg[v];
      if (indeg[v] === 0) queue.push(v);
    }
  }
  if (result.length !== numCourses) return [];
  return result;
};
// @lc code=end
