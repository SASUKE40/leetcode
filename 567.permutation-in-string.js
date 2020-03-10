/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let map = new Map();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], map.get(s1[i]) ? map.get(s1[i]) + 1 : 1);
  }
  let startSubString = s2.substring(0, s1.length);
  [...startSubString].forEach(s => {
    if (map.has(s)) {
      let v = map.get(s);
      map.set(s, v - 1);
    }
  });

  if (isWindowMatch(map)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    let leftIndex = i - s1.length;
    if (map.has(s2[leftIndex])) {
      map.set(s2[leftIndex], map.get(s2[leftIndex]) + 1);
    }
    if (map.has(s2[i])) {
      map.set(s2[i], map.get(s2[i]) - 1);
    }

    if (isWindowMatch(map)) return true;
  }
  return false;
};

function isWindowMatch(map) {
  let flag = true;
  map.forEach((v, k) => {
    if (v !== 0) flag = false;
  });
  return flag;
}

// @lc code=end
