/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  if (!k || !nums.length) return []
  let pq = new PQ()
  let list = []
  for (let i = 0; i < nums.length; i++) {
    pq.add(nums[i])
    if (i >= k) pq.del(nums[i - k]) // 窗口左边移动
    if (i >= k - 1) {  // 当窗口大小为k时, 就可以把中位数加入结果数组了
      let val = pq.getMid(k & 1)
      list.push(val)
    }
  }
  return list
};

class PQ {
  constructor() {
    this.queue = []
  }
  add(val) { // 添加, 用二分查找 找到要插入的位置
    let left = 0
    let right = this.queue.length - 1
    while (left <= right) {
      let mid = left + ((right - left) / 2 | 0)
      if (this.queue[mid] > val) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    this.queue.splice(left, 0, val)
  }
  del(val) { // 删除
    let index = this.queue.indexOf(val)
    this.queue.splice(index, 1)
  }
  getMid(isOdd) {
    let mid = this.queue.length / 2 | 0
    return isOdd ? this.queue[mid] : (this.queue[mid - 1] + this.queue[mid]) / 2
  }
}
// @lc code=end

