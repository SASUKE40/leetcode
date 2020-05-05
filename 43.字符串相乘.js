/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let num1Len = num1.length;
  let num2Len = num2.length;
  let list = new Array(num1Len + num2Len).fill(0);
  let result = '';
  for (let i = num1Len - 1; i >= 0; i--) {
    let num1Char = Number(num1[i]);
    for (let j = num2Len - 1; j >= 0; j--) {
      let num2Char = Number(num2[j]);
      let sum = list[i + j + 1] + num1Char * num2Char;
      list[i + j + 1] = sum % 10;
      list[i + j] += (sum / 10) >> 0;
    }
  }
  while (list.length > 1 && list[0] === 0) {
    list = list.slice(1);
  }
  result = list.join('');
  return result;
};
// @lc code=end
