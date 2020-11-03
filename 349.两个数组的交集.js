/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);
  const length1 = nums1.length,
    length2 = nums2.length;
  let index1 = 0,
    index2 = 0;
  const intersection = [];
  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[index1],
      num2 = nums2[index2];
    if (num1 === num2) {
      // 保证加入元素的唯一性
      if (
        !intersection.length ||
        num1 !== intersection[intersection.length - 1]
      ) {
        intersection.push(num1);
      }
      index1++;
      index2++;
    } else if (num1 < num2) {
      index1++;
    } else {
      index2++;
    }
  }
  return intersection;
};
// @lc code=end
