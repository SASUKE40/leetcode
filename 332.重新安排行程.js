/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const res = [];
  const map = {};

  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }

  const dfs = (node) => {
    const nextNodes = map[node];
    while (nextNodes && nextNodes.length) {
      const next = nextNodes.shift();
      dfs(next);
    }
    res.unshift(node);
  };

  dfs('JFK');
  return res;
};
// @lc code=end
