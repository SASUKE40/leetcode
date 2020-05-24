/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  const left = ((n + m + 1) / 2) >> 0;
  const right = ((n + m + 2) / 2) >> 0;
  return (
    (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) +
      getKth(nums1, 0, n - 1, nums2, 0, m - 1, right)) *
    0.5
  );

  function getKth(nums1, start1, end1, nums2, start2, end2, k) {
    let len1 = end1 - start1 + 1;
    let len2 = end2 - start2 + 1;
    if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
    if (len1 === 0) return nums2[start2 + k - 1];
    if (k === 1) return Math.min(nums1[start1], nums2[start2]);
    let half = k >> 1;
    let i = start1 + Math.min(half, len1) - 1;
    let j = start2 + Math.min(half, len2) - 1;
    if (nums1[i] > nums2[j]) {
      return getKth(
        nums1,
        start1,
        end1,
        nums2,
        j + 1,
        end2,
        k - (j - start2 + 1)
      );
    } else {
      return getKth(
        nums1,
        i + 1,
        end1,
        nums2,
        start2,
        end2,
        k - (i - start1 + 1)
      );
    }
  }
};
// @lc code=end
