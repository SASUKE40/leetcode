/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  for (let i = dungeon.length - 1; i >= 0; i--) {
    let currRow = dungeon[i];
    for (let j = currRow.length - 1; j >= 0; j--) {
      let cell = currRow[j];
      let rightCell = currRow[j + 1] || null;
      let bottomCell = dungeon[i + 1] ? dungeon[i + 1][j] : null;
      // right cell comparison
      let rightMin = (bottomMin = 0);
      if (rightCell) {
        rightMin = Math.max(rightCell - cell, 1);
      } else {
        rightMin = Math.max(1 - cell, 1);
      }

      // bottom cell comparison
      if (bottomCell) {
        bottomMin = Math.max(bottomCell - cell, 1);
      } else {
        bottomMin = Math.max(1 - cell, 1);
      }
      if (bottomCell && rightCell) {
        currRow[j] = Math.min(rightMin, bottomMin);
      } else {
        currRow[j] = Math.max(rightMin, bottomMin);
      }
    }
  }
  return dungeon[0][0];
};

// @lc code=end
