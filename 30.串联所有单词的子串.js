/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (words.length === 0) return [];
  let ret = [];
  // record word occur times
  let map = new Map();
  for (const word of words) {
    map.set(word, map.get(word) ? map.get(word) + 1 : 1);
  }
  // each word's length
  let wordLen = words[0].length;
  // total word len
  let totalLen = words.length * wordLen;
  for (let i = 0; i <= s.length - totalLen; i++) {
    let windowMap = new Map(map);
    let curr = i;
    while (curr < i + totalLen) {
      let currWord = s.slice(curr, curr + wordLen);
      // decrease word count when existing
      if (!windowMap.has(currWord)) break;
      windowMap.set(currWord, windowMap.get(currWord) - 1);
      curr += wordLen;
    }
    if (isMapEmpty(windowMap)) ret.push(i);
  }
  return ret;
};

function isMapEmpty(map) {
  for (const [k, v] of map) {
    if (v > 0) return false;
  }
  return true;
}

// @lc code=end
