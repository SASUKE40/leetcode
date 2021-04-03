/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ret = [];
  let i = 0;
  const n = nums.length;
  while (i < n) {
    const low = i;
    i++;
    while (i < n && nums[i] === nums[i - 1] + 1) {
      i++;
    }
    const high = i - 1;
    const temp = ['' + nums[low]];
    if (low < high) {
      temp.push('->');
      temp.push('' + nums[high]);
    }
    ret.push(temp.join(''));
  }
  return ret;
};
// @lc code=end

