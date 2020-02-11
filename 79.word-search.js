/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (word.length === 0) return true;
  if (board.length === 0) return false;
  const rows = board.length;
  const cols = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const hit = DFS(board, i, j, rows, cols, word, 0);
      if (hit) return true;
    }
  }
  return false;
};

function DFS(board, i, j, rows, cols, word, cur) {
  if (i >= rows || i < 0) return false;
  if (j >= cols || j < 0) return false;
  const item = board[i][j];
  if (item !== word[cur]) return false;
  if (cur + 1 === word.length) return true;
  board[i][j] = null;
  const res =
    DFS(board, i + 1, j, rows, cols, word, cur + 1) ||
    DFS(board, i - 1, j, rows, cols, word, cur + 1) ||
    DFS(board, i, j - 1, rows, cols, word, cur + 1) ||
    DFS(board, i, j + 1, rows, cols, word, cur + 1);
  board[i][j] = item;
  return res;
}
// @lc code=end
