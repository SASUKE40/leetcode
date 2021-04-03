/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  const n = arr.length;
  let ret = 1;
  let left = 0, right = 0;

  while (right < n - 1) {
    if (left == right) {
      if (arr[left] == arr[left + 1]) {
        left++;
      }
      right++;
    } else {
      if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) {
        right++;
      } else if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) {
        right++;
      } else {
        left = right;
      }
    }
    ret = Math.max(ret, right - left + 1);
  }
  return ret;
};
// @lc code=end

