/*
 * @lc app=leetcode.cn id=1095 lang=javascript
 *
 * [1095] 山脉数组中查找目标值
 */

// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  function binarySearch(l, r, ltr) {
    while (l <= r) {
      let mid = (l + r) >> 1;
      if (mountainArr.get(mid) < target) {
        if (ltr) l = mid + 1;
        else r = mid - 1;
      } else if (mountainArr.get(mid) > target) {
        if (ltr) r = mid - 1;
        else l = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
  const n = mountainArr.length();
  let l = 0;
  let r = n - 1;
  while (l < r) {
    let mid = (l + r) >> 1;
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  let peak = l;
  let index = binarySearch(0, peak, true);
  if (index > -1) return index;
  return binarySearch(peak, n - 1, false);
};
// @lc code=end
