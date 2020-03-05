/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start

var Trie = function() {
  this.root = new TrieNode();
};

var TrieNode = function(val) {
  this.children = new Map();
  this.val = val;
  this.isLeaf = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (node.children.has(char)) {
      node = node.children.get(char);
    } else {
      node.children.set(char, new TrieNode(char));
      node = node.children.get(char);
    }
  }
  node.isLeaf = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (node.children.has(char)) {
      node = node.children.get(char);
    } else {
      return false;
    }
  }
  return node.isLeaf;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i];
    if (node.children.has(char)) {
      node = node.children.get(char);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let result = new Set();
  let trie = new Trie();

  // build trie tree for cutting coditions
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    trie.insert(word);
  }
  // search words
  wordSearchLoop: for (let j = 0; j < board.length; j++) {
    const row = board[j];
    for (let k = 0; k < row.length; k++) {
      if (BackTrack('', j, k)) {
        break wordSearchLoop;
      }
    }
  }

  function BackTrack(substr, i, j) {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      board[i][j] === null ||
      !trie.startsWith(substr)
    )
      return false;
    substr += board[i][j];
    if (words.includes(substr)) {
      result.add(substr);
    }
    let temp = board[i][j];
    board[i][j] = null; //treat

    // right
    BackTrack(substr, i + 1, j);

    // bottom
    BackTrack(substr, i, j + 1);

    // left
    BackTrack(substr, i - 1, j);

    // top
    BackTrack(substr, i, j - 1);

    // restore
    board[i][j] = temp;
  }
  return new Array(...result);
};

let board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
let words = ['oath', 'pea', 'eat', 'rain'];
console.log('findWords(board, words)', findWords(board, words));

// @lc code=end
