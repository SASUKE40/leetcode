/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const resArr = [];

  const backtracking = (i, j, res, leftDp, rightDp, dp) => {
    if (i >= n) {
      resArr.push(res);
      return;
    }
    if (j >= n) return;
    if (leftDp[j] && rightDp[j] && dp[j]) {
      let s = '';
      for (let k = 0; k < n; ++k) {
        if (k === j) {
          s += 'Q';
        } else {
          s += '.';
        }
      }
      const curLeftDp = [...leftDp],
        curRightDp = [...rightDp],
        curDp = [...dp];
      (curLeftDp[j] = false), (curRightDp[j] = false), (curDp[j] = false);
      curLeftDp.shift();
      curLeftDp.push(true);
      curRightDp.pop();
      curRightDp.unshift(true);
      backtracking(i + 1, 0, [...res, s], curLeftDp, curRightDp, curDp);
    }
    backtracking(i, j + 1, [...res], leftDp, rightDp, dp);
  };

  backtracking(
    0,
    0,
    [],
    new Array(n).fill(true),
    new Array(n).fill(true),
    new Array(n).fill(true)
  );

  return resArr;
};
// @lc code=end
