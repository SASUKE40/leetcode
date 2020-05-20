/*
 * @lc app=leetcode.cn id=1371 lang=javascript
 *
 * [1371] 每个元音包含偶数次的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  let n = s.length;
  let ans = 0;
  let status = 0;
  let pos = new Array(1 << 5).fill(-1);
  pos[0] = 0;
  for (let i = 0; i < n; i++) {
    switch (s[i]) {
      case 'a':
        status ^= 1 << 0;
        break;
      case 'e':
        status ^= 1 << 1;
        break;
      case 'i':
        status ^= 1 << 2;
        break;
      case 'o':
        status ^= 1 << 3;
        break;
      case 'u':
        status ^= 1 << 4;
        break;
    }
    if (~pos[status]) {
      ans = Math.max(ans, i + 1 - pos[status]);
    } else {
      pos[status] = i + 1;
    }
  }
  return ans;
};
// @lc code=end
