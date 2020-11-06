/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const list = [];
  for (const x of arr) {
    list.push(x);
  }
  let bit = new Array(10000).fill(0);
  for (let i = 1; i <= 10000; i++) {
    bit[i] = bit[i >> 1] + (i & 1);
  }
  list.sort((x, y) => {
    if (bit[x] !== bit[y]) {
      return bit[x] - bit[y];
    } else {
      return x - y;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    arr[i] = list[i];
  }
  return arr;
};
// @lc code=end
