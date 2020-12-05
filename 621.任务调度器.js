/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const freq = _.countBy(tasks);

  // 最多的执行次数
  const maxExec = Math.max(...Object.values(freq));
  // 具有最多执行次数的任务数量
  let maxCount = 0;
  Object.values(freq).forEach(v => {
    if (v === maxExec) {
      maxCount++;
    }
  })

  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
};
// @lc code=end

