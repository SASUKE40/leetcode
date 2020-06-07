/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  wordSet.add(beginWord);
  if (!wordSet.has(endWord)) return [];

  const levelMap = new Map();
  const wordMap = new Map();
  const queue = [beginWord];
  const visited = new Set();
  let finished = false;
  let level = 0;
  levelMap.set(beginWord, 0);
  visited.add(beginWord);
  while (queue.length > 0) {
    let levelSize = queue.length;
    level++;
    for (let i = 0; i < levelSize; i++) {
      const word = queue.shift();
      for (let j = 0; j < word.length; j++) {
        for (let code = 97; code <= 122; code++) {
          const newWord =
            word.slice(0, j) + String.fromCharCode(code) + word.slice(j + 1);
          if (!wordSet.has(newWord)) continue;
          if (wordMap.has(newWord)) {
            wordMap.get(newWord).push(word);
          } else {
            wordMap.set(newWord, [word]);
          }
          if (visited.has(newWord)) continue;
          if (newWord === endWord) finished = true;
          levelMap.set(newWord, level);
          queue.push(newWord);
          visited.add(newWord);
        }
      }
    }
  }
  if (!finished) return [];
  const res = [];
  dfs(res, [], beginWord, endWord, wordMap, levelMap);
  return res;
};

function dfs(res, path, beginWord, word, wordMap, levelMap) {
  if (word === beginWord) {
    res.push([beginWord, ...path]);
    return;
  }
  path.unshift(word);
  if (wordMap.get(word)) {
    for (const parent of wordMap.get(word)) {
      if (levelMap.get(parent) + 1 === levelMap.get(word)) {
        dfs(res, path, beginWord, parent, wordMap, levelMap);
      }
    }
  }
  path.shift();
}
// @lc code=end
