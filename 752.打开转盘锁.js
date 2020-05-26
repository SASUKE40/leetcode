/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let queue = [];
  let seen = new Set();
  queue.push(['0000', 0]);
  while (queue.length > 0) {
    let [node, depth] = queue.shift();
    if (node === target) return depth;
    if (deadends.includes(node)) continue;
    for (let i = 0; i < 4; i++) {
      for (let j = -1; j <= 1; j += 2) {
        let newNode =
          node.slice(0, i) +
          String((Number(node[i]) + j + 10) % 10) +
          node.slice(i + 1, 4);
        if (!seen.has(newNode)) {
          queue.push([newNode, depth + 1]);
          seen.add(newNode);
        }
      }
    }
  }
  return -1;
};

// @lc code=end
