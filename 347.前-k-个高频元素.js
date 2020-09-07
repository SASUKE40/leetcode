/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  const minHeap = new MinHeap(k, (a, b) => a.value - b.value);
  for (const [key, value] of map.entries()) minHeap.insert({key, value});
  return minHeap.stack.map((el) => el.key);
};

function MinHeap(capacity, compartor) {
  this.capacity = capacity;
  this.compartor = compartor;
  this.stack = [];
}

MinHeap.prototype.insert = function (value) {
  if (this.stack.length < this.capacity) {
    this.stack.push(value);
    this.swim(this.stack.length - 1);
  } else {
    if (this.compartor(value, this.stack[0]) > 0) {
      this.stack[0] = value;
      this.sink(0);
    }
  }
};

MinHeap.prototype.swim = function (index) {
  if (index >= this.stack.length) return;
  const parentIndex = parseInt((index - 1) / 2);
  if (this.compartor(this.stack[index], this.stack[parentIndex]) >= 0) return;
  this.exchange(index, parentIndex);
  this.swim(parentIndex);
};

MinHeap.prototype.sink = function (index) {
  if (index * 2 + 1 >= this.stack.length) return;
  let next = index * 2 + 1;
  if (
    next + 1 < this.stack.length &&
    this.compartor(this.stack[next], this.stack[next + 1]) > 0
  ) {
    next = next + 1;
  }
  if (this.compartor(this.stack[index], this.stack[next]) <= 0) return;
  this.exchange(index, next);
  this.sink(next);
};

MinHeap.prototype.exchange = function (idx1, idx2) {
  const temp = this.stack[idx1];
  this.stack[idx1] = this.stack[idx2];
  this.stack[idx2] = temp;
};
// @lc code=end
