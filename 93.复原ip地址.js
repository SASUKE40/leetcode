/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length === 0 || s.length > 12) return [];
  let ans = [];
  function dfs(s, pos, cur, ans) {
    if (cur.length === 4 && pos === s.length) {
      ans.push(cur.join('.'));
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (pos + i > s.length) break;
      let sub = s.substr(pos, i);
      if (
        (sub.startsWith('0') && sub.length > 1) ||
        (i === 3 && Number(sub) > 255)
      )
        continue;
      cur.push(sub);
      dfs(s, pos + i, cur, ans);
      cur.pop();
    }
  }
  dfs(s, 0, [], ans);
  return ans;
};
// @lc code=end
