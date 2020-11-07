/*
 * @lc app=leetcode.cn id=327 lang=javascript
 *
 * [327] 区间和的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countRangeSumRecursive = (sum, lower, upper, left, right) => {
  if (left === right) {
    return 0;
  } else {
    const mid = Math.floor((left + right) / 2);
    const n1 = countRangeSumRecursive(sum, lower, upper, left, mid);
    const n2 = countRangeSumRecursive(sum, lower, upper, mid + 1, right);
    let ret = n1 + n2;

    // 首先统计下标对的数量
    let i = left;
    let l = mid + 1;
    let r = mid + 1;
    while (i <= mid) {
      while (l <= right && sum[l] - sum[i] < lower) l++;
      while (r <= right && sum[r] - sum[i] <= upper) r++;
      ret += r - l;
      i++;
    }

    // 随后合并两个排序数组
    const sorted = new Array(right - left + 1);
    let p1 = left,
      p2 = mid + 1;
    let p = 0;
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = sum[p2++];
      } else if (p2 > right) {
        sorted[p++] = sum[p1++];
      } else {
        if (sum[p1] < sum[p2]) {
          sorted[p++] = sum[p1++];
        } else {
          sorted[p++] = sum[p2++];
        }
      }
    }
    for (let i = 0; i < sorted.length; i++) {
      sum[left + i] = sorted[i];
    }
    return ret;
  }
};
var countRangeSum = function (nums, lower, upper) {
  let s = 0;
  const sum = [0];
  for (const v of nums) {
    s += v;
    sum.push(s);
  }
  return countRangeSumRecursive(sum, lower, upper, 0, sum.length - 1);
};
// @lc code=end
