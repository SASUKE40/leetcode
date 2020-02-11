/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [],
    tokens = path.split('/').filter(t => !['.', '/', ''].includes(t));
  tokens.forEach(t => (t === '..' ? stack.pop() : stack.push(t)));
  return '/' + stack.join('/');
};
// @lc code=end
