/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') return [];
  let map = new Map();
  map.set('2', 'abc');
  map.set('3', 'def');
  map.set('4', 'ghi');
  map.set('5', 'jkl');
  map.set('6', 'mno');
  map.set('7', 'pqrs');
  map.set('8', 'tuv');
  map.set('9', 'wxyz');
  let ans = [];
  function backtrack(digits, str) {
    if (digits.length === 0) ans.push(str);
    else {
      let letter = map.get(digits[0]);
      for (let l of letter) {
        backtrack(digits.slice(1), str + l);
      }
    }
  }
  backtrack(digits, '');
  return ans;
};
// @lc code=end
