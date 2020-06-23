/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = [];
  let arrayA = Array.from(a);
  let arrayB = Array.from(b);
  let sum = 0;
  while (arrayA.length > 0 || arrayB.length > 0) {
    let strA = arrayA.pop();
    let numA = Number(strA || 0);
    let strB = arrayB.pop();
    let numB = Number(strB || 0);
    sum += numA + numB;
    result.push(sum % 2 >> 0);
    sum = (sum / 2) >> 0;
  }
  if (sum) result.push(sum);
  return result.reverse().join('');
};
// @lc code=end
