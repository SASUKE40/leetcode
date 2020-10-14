/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let minfreq = new Array(26).fill(Number.MAX_SAFE_INTEGER);
  for (const word of A) {
    let freq = new Array(26).fill(0);
    let length = word.length;
    for (let i = 0; i < length; i++) {
      let ch = word[i];
      ++freq[ch.charCodeAt() - 'a'.charCodeAt()];
    }
    for (let i = 0; i < 26; i++) {
      minfreq[i] = Math.min(minfreq[i], freq[i]);
    }
  }
  let ans = [];
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < minfreq[i]; j++) {
      ans.push(String.fromCharCode('a'.charCodeAt() + i));
    }
  }
  return ans;
};
// @lc code=end
