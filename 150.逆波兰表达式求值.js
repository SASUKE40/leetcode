/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  function cal() {
    let c = tokens.pop();
    switch (c) {
      case '+':
        return cal() + cal();
      case '-':
        let minor = cal();
        return cal() - minor;
      case '*':
        return cal() * cal();
      case '/':
        let div = cal();
        return (cal() / div) >> 0;
      default:
        return Number(c);
    }
  }
  return cal();
};
// @lc code=end
