/*
 * @lc app=leetcode id=722 lang=javascript
 *
 * [722] Remove Comments
 */

// @lc code=start
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  let inBlock = false;
  let newline = [];
  let ans = [];
  for (const line of source) {
    let i = 0;
    if (!inBlock) newline = [];
    while (i < line.length) {
      if (
        !inBlock &&
        i + 1 < line.length &&
        line[i] === '/' &&
        line[i + 1] === '*'
      ) {
        inBlock = true;
        i++;
      } else if (
        inBlock &&
        i + 1 < line.length &&
        line[i] === '*' &&
        line[i + 1] === '/'
      ) {
        inBlock = false;
        i++;
      } else if (
        !inBlock &&
        i + 1 < line.length &&
        line[i] === '/' &&
        line[i + 1] === '/'
      ) {
        break;
      } else if (!inBlock) {
        newline.push(line[i]);
      }
      i++;
    }
    if (!inBlock && newline.length > 0) {
      ans.push(newline.join(''));
    }
  }
  return ans;
};
// @lc code=end
