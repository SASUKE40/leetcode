/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const n = preorder.length;
  let i = 0;
  const stack = [1];
  while (i < n) {
    if (!stack.length) {
      return false;
    }
    if (preorder[i] === ',') {
      ++i;
    } else if (preorder[i] === '#') {
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      ++i;
    } else {
      // 读一个数字
      while (i < n && preorder[i] !== ',') {
        ++i;
      }
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      stack.push(2);
    }
  }
  return stack.length === 0;
};
// @lc code=end

