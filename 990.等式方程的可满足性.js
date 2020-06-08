/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let parent = new Array(26);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }
  const a = 'a'.charCodeAt();
  for (const e of equations) {
    if (e[1] === '=') {
      union(parent, e[0].charCodeAt() - a, e[3].charCodeAt() - a);
    }
  }
  for (const e of equations) {
    if (e[1] === '!') {
      if (
        find(parent, e[0].charCodeAt() - a) ===
        find(parent, e[3].charCodeAt() - a)
      )
        return false;
    }
  }
  return true;
};
function union(parent, a, b) {
  parent[find(parent, a)] = find(parent, b);
}
function find(parent, i) {
  while (parent[i] !== i) {
    parent[i] = parent[parent[i]];
    i = parent[i];
  }
  return i;
}
// @lc code=end
