/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let num1Index = 0,
    num2Index = 0,
    num1Len = nums1.length,
    num2Len = nums2.length,
    totalLen = num1Len + num2Len,
    mixedArr = [];
  let halfLen = Math.floor(totalLen / 2);
  let isEvenArr = totalLen % 2 === 0;
  if (num1Len === 0 || num2Len === 0) {
    mixedArr = nums1.concat(nums2);
  } else {
    for (let index = 0; index <= halfLen; index++) {
      let curNum1Elem = nums1[num1Index];
      let curNum2Elem = nums2[num2Index];
      if (curNum1Elem <= curNum2Elem) {
        mixedArr.push(curNum1Elem);
        num1Index++;
        if (num1Index === num1Len) {
          mixedArr = mixedArr.concat(nums2.slice(num2Index));
        }
      } else {
        mixedArr.push(curNum2Elem);
        num2Index++;
        if (num2Index === num2Len) {
          mixedArr = mixedArr.concat(nums1.slice(num1Index));
        }
      }
    }
  }
  if (isEvenArr) {
    return (mixedArr[halfLen] + mixedArr[halfLen - 1]) / 2;
  } else {
    return mixedArr[halfLen];
  }
};
// @lc code=end
