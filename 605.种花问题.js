/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  const m = flowerbed.length;
  let prev = -1;
  for (let i = 0; i < m; i++) {
    if (flowerbed[i] === 1) {
      if (prev < 0) {
        count += Math.floor(i / 2);
      } else {
        count += Math.floor((i - prev - 2) / 2);
      }
      if (count >= n) {
        return true;
      }
      prev = i;
    }
  }
  if (prev < 0) {
    count += (m + 1) / 2;
  } else {
    count += (m - prev - 1) / 2;
  }
  return count >= n;
};
// @lc code=end

