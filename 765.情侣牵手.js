/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  const n = row.length;
  const tot = n / 2;

  const graph = new Array(tot).fill(0).map(() => new Array());
  for (let i = 0; i < n; i += 2) {
    const l = Math.floor(row[i] / 2);
    const r = Math.floor(row[i + 1] / 2);
    if (l != r) {
      graph[l].push(r);
      graph[r].push(l);
    }
  }
  const visited = new Array(tot).fill(false);
  let ret = 0;
  for (let i = 0; i < tot; i++) {
    if (!visited[i]) {
      const queue = [];
      visited[i] = true;
      queue.push(i);
      let cnt = 0;

      while (queue.length) {
        const x = queue.shift();
        cnt += 1;

        for (const y of graph[x]) {
          if (!visited[y]) {
            visited[y] = true;
            queue.push(y);
          }
        }
      }
      ret += cnt - 1;
    }
  }
  return ret;
};
// @lc code=end

