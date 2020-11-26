/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return 0;
  }
  let exp = 1;
  const buf = new Array(n).fill(0);
  const maxVal = Math.max(...nums);

  while (maxVal >= exp) {
    const cnt = new Array(10).fill(0);
    for (let i = 0; i < n; i++) {
      let digit = Math.floor(nums[i] / exp) % 10;
      cnt[digit]++;
    }
    for (let i = 1; i < 10; i++) {
      cnt[i] += cnt[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
      let digit = Math.floor(nums[i] / exp) % 10;
      buf[cnt[digit] - 1] = nums[i];
      cnt[digit]--;
    }
    nums.splice(0, n, ...buf);
    exp *= 10;
  }

  let ret = 0;
  for (let i = 1; i < n; i++) {
    ret = Math.max(ret, nums[i] - nums[i - 1]);
  }
  return ret;
};
// @lc code=end
