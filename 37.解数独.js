/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  const rows = new Array(9);
  const cols = new Array(9);
  const blocks = new Array(9);
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set(options);
    cols[i] = new Set(options);
    blocks[i] = new Set(options);
  }

  const getBlockIndex = (i, j) => {
    return (((i / 3) | 0) * 3 + j / 3) | 0;
  };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != '.') {
        rows[i].delete(board[i][j]);
        cols[j].delete(board[i][j]);
        blocks[getBlockIndex(i, j)].delete(board[i][j]);
      }
    }
  }

  const fill = (i, j) => {
    if (j == 9) {
      i++;
      j = 0;
      if (i == 9) return true;
    }
    if (board[i][j] != '.') return fill(i, j + 1);

    const blockIndex = getBlockIndex(i, j);

    for (let num = 1; num <= 9; num++) {
      const s = String(num);
      if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s))
        continue;

      board[i][j] = s;
      rows[i].delete(s);
      cols[j].delete(s);
      blocks[blockIndex].delete(s);

      if (fill(i, j + 1)) return true;
      board[i][j] = '.';
      rows[i].add(s);
      cols[j].add(s);
      blocks[blockIndex].add(s);
    }
    return false;
  };

  fill(0, 0);
  return board;
};

// @lc code=end
