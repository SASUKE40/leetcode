/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let result = '';
  for (const c of s) {
    if (!isNaN(c)) num = num * 10 + Number(c);
    else if (c === '[') {
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if (c === ']') {
      let repeatTimes = numStack.pop();
      result = strStack.pop() + result.repeat(repeatTimes);
    } else result += c;
  }
  return result;
};

// @lc code=end
