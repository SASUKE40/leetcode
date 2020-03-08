/*
 * @lc app=leetcode id=419 lang=javascript
 *
 * [419] Battleships in a Board
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let record = 0;
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 'X') {
        DFS(board, i, j);
        record++;
      }
    }
  }
  return record;
};

function DFS(board, i, j) {
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] === '.'
  )
    return;
  if (board[i][j] === 'X') {
    board[i][j] = '.';
  }
  DFS(board, i + 1, j);
  DFS(board, i - 1, j);
  DFS(board, i, j - 1);
  DFS(board, i, j + 1);
}
// @lc code=end
