/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const m = nums1.length,
    n = nums2.length;
  const maxSubsequence = new Array(k).fill(0);
  let start = Math.max(0, k - n),
    end = Math.min(k, m);
  for (let i = start; i <= end; i++) {
    const subsequence1 = new MaxSubsequence(nums1, i);
    const subsequence2 = new MaxSubsequence(nums2, k - i);
    const curMaxSubsequence = merge(subsequence1, subsequence2);
    if (compare(curMaxSubsequence, 0, maxSubsequence, 0) > 0) {
      maxSubsequence.splice(0, k, ...curMaxSubsequence);
    }
  }
  return maxSubsequence;
};

var MaxSubsequence = function (nums, k) {
  const length = nums.length;
  const stack = new Array(k).fill(0);
  let top = -1;
  let remain = length - k;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    while (top >= 0 && stack[top] < num && remain > 0) {
      top--;
      remain--;
    }
    if (top < k - 1) {
      stack[++top] = num;
    } else {
      remain--;
    }
  }
  return stack;
};

const merge = (subsequence1, subsequence2) => {
  const x = subsequence1.length,
    y = subsequence2.length;
  if (x === 0) {
    return subsequence2;
  }
  if (y === 0) {
    return subsequence1;
  }
  const mergeLength = x + y;
  const merged = new Array(mergeLength).fill(0);
  let index1 = 0,
    index2 = 0;
  for (let i = 0; i < mergeLength; i++) {
    if (compare(subsequence1, index1, subsequence2, index2) > 0) {
      merged[i] = subsequence1[index1++];
    } else {
      merged[i] = subsequence2[index2++];
    }
  }
  return merged;
};

const compare = (subsequence1, index1, subsequence2, index2) => {
  const x = subsequence1.length,
    y = subsequence2.length;
  while (index1 < x && index2 < y) {
    const difference = subsequence1[index1] - subsequence2[index2];
    if (difference !== 0) {
      return difference;
    }
    index1++;
    index2++;
  }
  return x - index1 - (y - index2);
};
// @lc code=end
