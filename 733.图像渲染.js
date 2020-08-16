/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];
  const currColor = image[sr][sc];
  if (currColor === newColor) {
    return image;
  }
  const n = image.length;
  const m = image[0].length;
  let queue = [];
  queue.push([sr, sc]);
  image[sr][sc] = newColor;
  while (queue.length > 0) {
    let cell = queue.shift();
    let [x, y] = cell;
    for (let i = 0; i < 4; i++) {
      let mx = x + dx[i];
      let my = y + dy[i];
      if (
        mx >= 0 &&
        mx < n &&
        my >= 0 &&
        my < m &&
        image[mx][my] === currColor
      ) {
        queue.push([mx, my]);
        image[mx][my] = newColor;
      }
    }
  }
  return image;
};
// @lc code=end
