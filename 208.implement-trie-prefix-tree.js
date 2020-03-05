/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
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
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = new Trie();

trie.insert('apple');
console.log("trie.search('apple')", trie.search('apple'));
console.log("trie.search('app');", trie.search('app'));
console.log("trie.startsWith('app')", trie.startsWith('app'));
trie.insert('app');
console.log("trie.search('app')", trie.search('app'));
console.log(trie);

// @lc code=end
