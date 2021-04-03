/*
 * @lc app=leetcode.cn id=861 lang=javascript
 *
 * [861] 翻转矩阵后的得分
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  const m = A.length, n = A[0].length;
  let ret = m * (1 << (n - 1));

  for (let j = 1; j < n; j++) {
    let nOnes = 0;
    for (let i = 0; i < m; i++) {
      if (A[i][0] === 1) {
        nOnes += A[i][j];
      } else {
        nOnes += (1 - A[i][j]); // 如果这一行进行了行反转，则该元素的实际取值为 1 - A[i][j]
      }
    }
    const k = Math.max(nOnes, m - nOnes);
    ret += k * (1 << (n - j - 1));
  }
  return ret;
};
// @lc code=end

